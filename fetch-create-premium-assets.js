const fs = require("fs");
const path = require("path");

const ROOT = path.join(process.cwd(), "public");

const folders = [
  "flags",
  "icons",

  "videos",
  "videos/hero",
  "videos/background",
  "videos/onboard",
  "videos/pitlane",

  "models",
  "models/cars",
  "models/helmets",
  "models/trophies",
  "models/wheels",
  "models/tracks",

  "news/gallery",

  "logos/sponsors",
  "logos/manufacturers",

  "loading/lottie",

  "textures/carbon",
  "textures/mesh",
  "textures/glass",
  "textures/grid",
  "textures/noise",
  "textures/gradients",
];

const files = [
  // Flags
  ...[
    "australia","austria","azerbaijan","bahrain","belgium","brazil",
    "canada","china","france","germany","hungary","india","italy",
    "japan","mexico","monaco","netherlands","qatar","saudi-arabia",
    "singapore","spain","thailand","uae","uk","usa"
  ].map(f => `flags/${f}.svg`),

  // Icons
  ...[
    "drs","helmet","pit-stop","pit-lane",
    "soft-tyre","medium-tyre","hard-tyre",
    "intermediate","wet",
    "checkered-flag",
    "safety-car",
    "virtual-safety-car",
    "red-flag",
    "yellow-flag",
    "green-flag"
  ].map(f => `icons/${f}.svg`),

  // Videos
  "videos/hero/hero-loop.mp4",
  "videos/background/garage.mp4",
  "videos/background/pitlane.mp4",
  "videos/background/track.mp4",
  "videos/onboard/verstappen.mp4",
  "videos/onboard/leclerc.mp4",
  "videos/pitlane/pitstop.mp4",

  // Models
  "models/cars/f1-car.glb",
  "models/helmets/helmet.glb",
  "models/trophies/trophy.glb",
  "models/wheels/wheel.glb",
  "models/tracks/monza.glb",
  "models/tracks/spa.glb",

  // Sponsor logos
  ...[
    "aws",
    "aramco",
    "dhl",
    "lenovo",
    "qatar-airways",
    "tag-heuer",
    "crypto-com",
    "msc"
  ].map(f => `logos/sponsors/${f}.svg`),

  // Manufacturer logos
  ...[
    "ferrari",
    "mercedes",
    "honda",
    "renault",
    "audi"
  ].map(f => `logos/manufacturers/${f}.svg`),

  // Textures
  "textures/carbon/carbon-01.png",
  "textures/carbon/carbon-02.png",
  "textures/mesh/mesh-01.png",
  "textures/mesh/mesh-02.png",
  "textures/glass/glass.png",
  "textures/grid/grid.png",
  "textures/noise/noise.png",
  "textures/gradients/red-gradient.png",
  "textures/gradients/silver-gradient.png",
  "textures/gradients/black-gradient.png",
];

// News gallery placeholders
for (let i = 1; i <= 15; i++) {
  files.push(`news/gallery/article-${i}-1.png`);
  files.push(`news/gallery/article-${i}-2.png`);
}

folders.forEach(folder => {
  fs.mkdirSync(path.join(ROOT, folder), { recursive: true });
});

files.forEach(file => {
  const fullPath = path.join(ROOT, file);

  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, "");
  }
});

console.log("🏁 RACEX Premium Asset Structure completed successfully.");