export type AudioChannel =
  | "Master"
  | "UI"
  | "Loader"
  | "Garage"
  | "Cursor"
  | "Ambience"
  | "Future"
  | "PitWall"
  | "Telemetry"
  | "Radio";

export interface SoundConfig {
  id: string;
  path: string;
  channel: AudioChannel;
  defaultVolume?: number;
  loop?: boolean;
}

export type SoundId =
  | "ambient"
  | "button-click"
  | "card-hover"
  | "click"
  | "close"
  | "countdown"
  | "crowd"
  | "electric-hum"
  | "engine-start"
  | "error"
  | "f1-intro"
  | "f1-notification"
  | "hover"
  | "hydraulics"
  | "idle"
  | "lap-complete"
  | "led-click"
  | "navigation"
  | "open"
  | "page-transition"
  | "rain"
  | "rev"
  | "sting"
  | "success"
  | "ventilation"
  | "wind";

export type LoaderPhase =
  | "darkness"
  | "led-boot"
  | "ignition"
  | "logo-reveal"
  | "countdown"
  | "engine-start"
  | "lights-out";
