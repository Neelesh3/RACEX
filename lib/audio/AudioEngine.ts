import { SOUNDS, CHANNEL_VOLUMES } from "./audio-config";
import { SoundId, AudioChannel } from "./audio-types";

class AudioEngine {
  private cache: Map<SoundId, HTMLAudioElement> = new Map();
  private channelVolumes: Map<AudioChannel, number> = new Map();
  private masterVolume = 1.0;
  private muted = false;
  private isUnlocked = false;
  private pendingPlays: Set<SoundId> = new Set();
  private fadeIntervals: Map<SoundId, NodeJS.Timeout> = new Map();

  constructor() {
    if (typeof window === "undefined") return;

    // Load localStorage mute preference
    try {
      const storedMute = localStorage.getItem("race-audio-muted");
      this.muted = storedMute === "true";
    } catch {
      // Ignore storage errors in sandbox/private browsing
    }

    // Initialize channel volumes
    Object.entries(CHANNEL_VOLUMES).forEach(([channel, volume]) => {
      this.channelVolumes.set(channel as AudioChannel, volume);
    });

    // Register user interaction handlers to unlock autoplay audio
    const unlockEvents = ["click", "keydown", "mousedown", "touchstart"];
    const unlock = () => {
      this.unlockEngine();
      unlockEvents.forEach((event) => {
        window.removeEventListener(event, unlock);
      });
    };
    unlockEvents.forEach((event) => {
      window.addEventListener(event, unlock, { passive: true });
    });
  }

  private unlockEngine() {
    this.isUnlocked = true;
    this.pendingPlays.forEach((id) => {
      this.play(id);
    });
    this.pendingPlays.clear();
  }

  private getAudioElement(id: SoundId): HTMLAudioElement | null {
    if (typeof window === "undefined") return null;

    if (this.cache.has(id)) {
      return this.cache.get(id)!;
    }

    const config = SOUNDS[id];
    if (!config) return null;

    const audio = new Audio(config.path);
    audio.loop = config.loop ?? false;
    audio.preload = "auto";
    this.updateElementVolume(id, audio);

    this.cache.set(id, audio);
    return audio;
  }

  private updateElementVolume(id: SoundId, audio: HTMLAudioElement) {
    const config = SOUNDS[id];
    if (!config) return;

    const channelVol = this.channelVolumes.get(config.channel) ?? 1.0;
    const defaultVol = config.defaultVolume ?? 1.0;
    
    // Final volume calculation: default * channel * master * (muted ? 0 : 1)
    const rawVolume = defaultVol * channelVol * this.masterVolume;
    audio.volume = this.muted ? 0 : Math.max(0, Math.min(1, rawVolume));
  }

  private updateAllVolumes() {
    this.cache.forEach((audio, id) => {
      this.updateElementVolume(id, audio);
    });
  }

  public preloadAll() {
    if (typeof window === "undefined") return;
    Object.keys(SOUNDS).forEach((id) => {
      this.getAudioElement(id as SoundId);
    });
  }

  public play(id: SoundId, options?: { loop?: boolean; volume?: number }) {
    if (typeof window === "undefined") return;

    const audio = this.getAudioElement(id);
    if (!audio) return;

    // Clear any active fade interval for this sound
    this.clearFadeInterval(id);

    if (options?.loop !== undefined) {
      audio.loop = options.loop;
    }

    // Apply custom default volume if specified
    if (options?.volume !== undefined) {
      const config = SOUNDS[id];
      if (config) {
        config.defaultVolume = options.volume;
      }
    }

    this.updateElementVolume(id, audio);

    if (!this.isUnlocked) {
      this.pendingPlays.add(id);
      return;
    }

    // Reset playback position and play
    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.warn(`Autoplay blocked or playback error for audio: ${id}`, err);
    });
  }

  public stop(id: SoundId, fadeDuration = 0) {
    const audio = this.cache.get(id);
    if (!audio) return;

    if (fadeDuration <= 0) {
      this.clearFadeInterval(id);
      audio.pause();
      audio.currentTime = 0;
    } else {
      this.fadeOut(id, fadeDuration);
    }
  }

  public pause(id: SoundId) {
    const audio = this.cache.get(id);
    if (audio) {
      audio.pause();
    }
  }

  public resume(id: SoundId) {
    const audio = this.cache.get(id);
    if (audio && audio.paused) {
      audio.play().catch(() => {});
    }
  }

  public fadeIn(id: SoundId, duration = 1.0, targetVolume?: number) {
    if (typeof window === "undefined") return;

    const audio = this.getAudioElement(id);
    if (!audio) return;

    this.clearFadeInterval(id);

    const config = SOUNDS[id];
    if (!config) return;

    const maxVolume = targetVolume ?? config.defaultVolume ?? 1.0;
    const channelVol = this.channelVolumes.get(config.channel) ?? 1.0;
    const targetRawVolume = maxVolume * channelVol * this.masterVolume;
    const finalTarget = this.muted ? 0 : Math.max(0, Math.min(1, targetRawVolume));

    audio.volume = 0;
    audio.currentTime = 0;

    if (!this.isUnlocked) {
      this.pendingPlays.add(id);
      return;
    }

    audio.play().catch(() => {});

    const steps = 20;
    const stepTime = (duration * 1000) / steps;
    const stepVolume = finalTarget / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      audio.volume = Math.max(0, Math.min(finalTarget, stepVolume * currentStep));

      if (currentStep >= steps) {
        this.clearFadeInterval(id);
        audio.volume = finalTarget;
      }
    }, stepTime);

    this.fadeIntervals.set(id, interval);
  }

  public fadeOut(id: SoundId, duration = 1.0) {
    const audio = this.cache.get(id);
    if (!audio) return;

    this.clearFadeInterval(id);

    const startVolume = audio.volume;
    if (startVolume === 0) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    const steps = 20;
    const stepTime = (duration * 1000) / steps;
    const stepVolume = startVolume / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      audio.volume = Math.max(0, startVolume - stepVolume * currentStep);

      if (currentStep >= steps) {
        this.clearFadeInterval(id);
        audio.pause();
        audio.currentTime = 0;
        this.updateElementVolume(id, audio); // Restore config volume setting
      }
    }, stepTime);

    this.fadeIntervals.set(id, interval);
  }

  public crossFade(fromId: SoundId, toId: SoundId, duration = 1.5) {
    this.fadeOut(fromId, duration);
    this.fadeIn(toId, duration);
  }

  public setChannelVolume(channel: AudioChannel, volume: number) {
    this.channelVolumes.set(channel, Math.max(0, Math.min(1, volume)));
    this.updateAllVolumes();
  }

  public setMute(isMuted: boolean) {
    this.muted = isMuted;
    try {
      localStorage.setItem("race-audio-muted", isMuted ? "true" : "false");
    } catch {
      // Ignore
    }
    this.updateAllVolumes();
  }

  public isMuted(): boolean {
    return this.muted;
  }

  private clearFadeInterval(id: SoundId) {
    const interval = this.fadeIntervals.get(id);
    if (interval) {
      clearInterval(interval);
      this.fadeIntervals.delete(id);
    }
  }
}

// Export single instances
export const audioEngine = new AudioEngine();
export default audioEngine;
