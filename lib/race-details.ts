// lib/race-details.ts
import type { RaceDetails } from "@/types/race-details";

export const raceDetails: Record<string, RaceDetails> = {
  "aus-2026": {
    raceId: "aus-2026",
    overview: "The season opener at Albert Park Circuit in Melbourne delivered a thrilling start to the 2026 championship. Max Verstappen took a commanding victory, managing his tires perfectly through Melbourne's high-speed sweeping corners, while Lando Norris closely pursued him after starting from pole position.",
    history: "Albert Park has hosted the Australian Grand Prix since 1996, taking over from Adelaide. The track is built around Albert Park Lake and underwent significant design modifications in 2022 to increase overtaking opportunities and speed up lap times.",
    circuitSlug: "australian-grand-prix",
    podium: [
      { position: 1, driverName: "Max Verstappen", team: "Red Bull Racing" },
      { position: 2, driverName: "Lando Norris", team: "McLaren" },
      { position: 3, driverName: "Charles Leclerc", team: "Ferrari" }
    ],
    fastestLap: {
      driverName: "Lando Norris",
      team: "McLaren",
      time: "1:20.123"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Charles Leclerc", team: "Ferrari" },
      { year: 2024, driver: "Carlos Sainz", team: "Ferrari" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 58,
      raceDistance: "306.124 km",
      lapRecord: "1:19.813",
      drsZones: 4,
      corners: 14
    }
  },
  "chn-2026": {
    raceId: "chn-2026",
    overview: "Lando Norris claimed a dominant victory at the Shanghai International Circuit. McLaren's aerodynamic efficiency shone on Shanghai's long straight, allowing Norris to bypass teammate Oscar Piastri and hold off a late charge from Max Verstappen.",
    history: "Designed by Hermann Tilke, the Shanghai International Circuit has been on the F1 calendar since 2004. Its layout is modeled after the Chinese character 'Shang' (上), meaning 'above' or 'to ascend'.",
    circuitSlug: "chinese-grand-prix",
    podium: [
      { position: 1, driverName: "Lando Norris", team: "McLaren" },
      { position: 2, driverName: "Oscar Piastri", team: "McLaren" },
      { position: 3, driverName: "Max Verstappen", team: "Red Bull Racing" }
    ],
    fastestLap: {
      driverName: "Oscar Piastri",
      team: "McLaren",
      time: "1:33.421"
    },
    gallery: [],
    winnerHistory: [
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2019, driver: "Lewis Hamilton", team: "Mercedes" },
      { year: 2018, driver: "Daniel Ricciardo", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 56,
      raceDistance: "305.066 km",
      lapRecord: "1:32.238",
      drsZones: 2,
      corners: 16
    }
  },
  "jpn-2026": {
    raceId: "jpn-2026",
    overview: "Max Verstappen displayed a masterclass performance at Suzuka, securing both pole position and the race win. The Red Bull Racing driver was untouchable through the high-speed 'S' Curves, cementing a comfortable victory ahead of Lando Norris.",
    history: "Suzuka is one of the oldest remaining tracks on the calendar, featuring a unique figure-eight layout. Originally built as a Honda test track in 1962, it has hosted some of the most legendary championship-deciding races in F1 history.",
    circuitSlug: "japanese-grand-prix",
    podium: [
      { position: 1, driverName: "Max Verstappen", team: "Red Bull Racing" },
      { position: 2, driverName: "Lando Norris", team: "McLaren" },
      { position: 3, driverName: "Charles Leclerc", team: "Ferrari" }
    ],
    fastestLap: {
      driverName: "Max Verstappen",
      team: "Red Bull Racing",
      time: "1:31.542"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 53,
      raceDistance: "307.471 km",
      lapRecord: "1:30.983",
      drsZones: 1,
      corners: 18
    }
  },
  "bhr-2026": {
    raceId: "bhr-2026",
    overview: "Oscar Piastri clinched his first victory of the 2026 season under the floodlights in Sakhir. Piastri capitalized on a strategic pitstop window to leapfrog polesitter Charles Leclerc, defending under intense pressure in the closing laps.",
    history: "The Bahrain Grand Prix made history in 2004 as the first Formula One race held in the Middle East. It has since become a spectacular night event, famous for its abrasive track surface that tests tire durability.",
    circuitSlug: "bahrain-grand-prix",
    podium: [
      { position: 1, driverName: "Oscar Piastri", team: "McLaren" },
      { position: 2, driverName: "Charles Leclerc", team: "Ferrari" },
      { position: 3, driverName: "George Russell", team: "Mercedes" }
    ],
    fastestLap: {
      driverName: "Oscar Piastri",
      team: "McLaren",
      time: "1:32.415"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 57,
      raceDistance: "308.238 km",
      lapRecord: "1:31.447",
      drsZones: 3,
      corners: 15
    }
  },
  "sau-2026": {
    raceId: "sau-2026",
    overview: "George Russell secured a brilliant victory for Mercedes on the high-speed streets of Jeddah. Russell executed a daring pass on Lando Norris, utilizing superior straight-line speed to capture the top step of the podium.",
    history: "The Jeddah Corniche Circuit is the fastest street circuit in Formula One history. Running alongside the Red Sea, the track features 27 corners, many of which are fast and blind, presenting a high risk-reward scenario for drivers.",
    circuitSlug: "saudi-arabian-grand-prix",
    podium: [
      { position: 1, driverName: "George Russell", team: "Mercedes" },
      { position: 2, driverName: "Lando Norris", team: "McLaren" },
      { position: 3, driverName: "Lewis Hamilton", team: "Ferrari" }
    ],
    fastestLap: {
      driverName: "George Russell",
      team: "Mercedes",
      time: "1:31.255"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2023, driver: "Sergio Perez", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 50,
      raceDistance: "308.450 km",
      lapRecord: "1:30.734",
      drsZones: 3,
      corners: 27
    }
  },
  "usa-mia-2026": {
    raceId: "usa-mia-2026",
    overview: "Lando Norris secured his second win of the season around the Miami Hard Rock Stadium. A timely Safety Car period allowed Norris to pit and emerge ahead of Max Verstappen, which he followed with a flawlessly managed restart.",
    history: "The Miami International Autodrome is a purpose-built temporary circuit situated around the Hard Rock Stadium complex. It was introduced to the Formula One calendar in 2022 to expand the sport's footprint in North America.",
    circuitSlug: "miami-grand-prix",
    podium: [
      { position: 1, driverName: "Lando Norris", team: "McLaren" },
      { position: 2, driverName: "Max Verstappen", team: "Red Bull Racing" },
      { position: 3, driverName: "Oscar Piastri", team: "McLaren" }
    ],
    fastestLap: {
      driverName: "Lando Norris",
      team: "McLaren",
      time: "1:30.112"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2024, driver: "Lando Norris", team: "McLaren" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 57,
      raceDistance: "308.326 km",
      lapRecord: "1:29.708",
      drsZones: 3,
      corners: 19
    }
  },
  "ita-2026": {
    raceId: "ita-2026",
    overview: "Charles Leclerc ignited the Tifosi by taking victory at Imola from pole position. Ferrari's upgraded aerodynamic package proved highly effective around the historic, high-curb circuit, allowing Leclerc to maintain an insurmountable lead.",
    history: "Imola, officially named Autodromo Enzo e Dino Ferrari, is a classic track steeped in history. The anti-clockwise circuit has hosted F1 under various GP titles since 1980 and is renowned for its iconic, fast corners.",
    circuitSlug: "emilia-romagna-grand-prix",
    podium: [
      { position: 1, driverName: "Charles Leclerc", team: "Ferrari" },
      { position: 2, driverName: "Oscar Piastri", team: "McLaren" },
      { position: 3, driverName: "Lando Norris", team: "McLaren" }
    ],
    fastestLap: {
      driverName: "Charles Leclerc",
      team: "Ferrari",
      time: "1:16.223"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2022, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 63,
      raceDistance: "309.049 km",
      lapRecord: "1:15.484",
      drsZones: 1,
      corners: 19
    }
  },
  "mco-2026": {
    raceId: "mco-2026",
    overview: "Oscar Piastri conquered the streets of Monte Carlo in a tactical, defensive race. Despite Charles Leclerc starting on pole and putting up a persistent challenge, Piastri utilized Monaco's narrow passing limits to secure the crown jewel win.",
    history: "The Monaco Grand Prix is the ultimate test of precision and bravery in motorsport. First run in 1929, the circuit weaves through the tight streets of Monte Carlo, passing the harbor, the casino, and the famous tunnel.",
    circuitSlug: "monaco-grand-prix",
    podium: [
      { position: 1, driverName: "Oscar Piastri", team: "McLaren" },
      { position: 2, driverName: "Charles Leclerc", team: "Ferrari" },
      { position: 3, driverName: "Lando Norris", team: "McLaren" }
    ],
    fastestLap: {
      driverName: "Lewis Hamilton",
      team: "Ferrari",
      time: "1:13.411"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Charles Leclerc", team: "Ferrari" },
      { year: 2024, driver: "Charles Leclerc", team: "Ferrari" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 78,
      raceDistance: "260.286 km",
      lapRecord: "1:12.909",
      drsZones: 1,
      corners: 19
    }
  },
  "esp-2026": {
    raceId: "esp-2026",
    overview: "Lando Norris secured a commanding victory in Barcelona. Starting from pole, Norris maintained his lead through Turn 1 and utilized McLaren's superb high-speed balance to comfortably manage the gap back to Max Verstappen.",
    history: "The Circuit de Barcelona-Catalunya has hosted the Spanish Grand Prix since 1991. The track is highly regarded as a complete aerodynamic test, featuring a demanding blend of high, medium, and low-speed corners.",
    circuitSlug: "spanish-grand-prix",
    podium: [
      { position: 1, driverName: "Lando Norris", team: "McLaren" },
      { position: 2, driverName: "Max Verstappen", team: "Red Bull Racing" },
      { position: 3, driverName: "Lewis Hamilton", team: "Ferrari" }
    ],
    fastestLap: {
      driverName: "Lando Norris",
      team: "McLaren",
      time: "1:17.119"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 66,
      raceDistance: "307.236 km",
      lapRecord: "1:16.330",
      drsZones: 2,
      corners: 14
    }
  },
  "aut-2026": {
    raceId: "aut-2026",
    overview: "Max Verstappen delivered a brilliant performance at the Red Bull Ring. Starting from pole, the Dutchman managed his tires perfectly across Spielberg's steep elevation changes, claiming a home-track win for Red Bull Racing.",
    history: "The Red Bull Ring is located in the scenic Styrian mountains. Originally opened in 1969 as the Österreichring, it was shortened and modernized in the late 1990s and has been a staple of the F1 calendar since its return in 2014.",
    circuitSlug: "austrian-grand-prix",
    podium: [
      { position: 1, driverName: "Max Verstappen", team: "Red Bull Racing" },
      { position: 2, driverName: "Oscar Piastri", team: "McLaren" },
      { position: 3, driverName: "Lando Norris", team: "McLaren" }
    ],
    fastestLap: {
      driverName: "Max Verstappen",
      team: "Red Bull Racing",
      time: "1:06.520"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing" },
      { year: 2024, driver: "George Russell", team: "Mercedes" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 71,
      raceDistance: "306.452 km",
      lapRecord: "1:05.619",
      drsZones: 3,
      corners: 10
    }
  },
  "gbr-2026": {
    raceId: "gbr-2026",
    overview: "Lewis Hamilton secured an emotional victory at Silverstone. Hamilton took the lead following a late-race tactical shift during mixed wet-to-dry weather conditions, crossing the line to claim his record-extending win on home soil.",
    history: "Silverstone is the historic cradle of Formula One, having hosted the first-ever World Championship race in 1950. The track is legendary for ultra-fast, high-lateral-G corners such as Copse, Maggotts, and Becketts.",
    circuitSlug: "british-grand-prix",
    podium: [
      { position: 1, driverName: "Lewis Hamilton", team: "Ferrari" },
      { position: 2, driverName: "Lando Norris", team: "McLaren" },
      { position: 3, driverName: "Max Verstappen", team: "Red Bull Racing" }
    ],
    fastestLap: {
      driverName: "Lewis Hamilton",
      team: "Ferrari",
      time: "1:28.120"
    },
    gallery: [],
    winnerHistory: [
      { year: 2025, driver: "Lewis Hamilton", team: "Mercedes" },
      { year: 2024, driver: "Lewis Hamilton", team: "Mercedes" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing" }
    ],
    statistics: {
      totalLaps: 52,
      raceDistance: "306.198 km",
      lapRecord: "1:27.097",
      drsZones: 2,
      corners: 18
    }
  },
  "hun-2026": {
    raceId: "hun-2026",
    overview: "The Hungarian Grand Prix at the tight and twisty Hungaroring outside Budapest is the next event on the 2026 F1 calendar. Overtaking is notoriously difficult, rewarding qualifying pace, downforce, and aerodynamic efficiency.",
    history: "Constructed in 1986, the Hungaroring was the first venue behind the Iron Curtain to host a Grand Prix. Its narrow, non-stop sequence of turns is often likened to a giant karting track, testing driver focus and stamina.",
    circuitSlug: "hungarian-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 70,
      raceDistance: "306.630 km",
      lapRecord: "1:16.627",
      drsZones: 2,
      corners: 14
    }
  },
  "bel-2026": {
    raceId: "bel-2026",
    overview: "The Belgian Grand Prix at Spa-Francorchamps is one of the most anticipated upcoming events. Weaving through the Ardennes forest, this legendary track demands maximum aerodynamic compromise between high-speed straights and sweeping corners.",
    history: "Spa-Francorchamps is a legendary circuit that hosted its first race in 1925. The track is world-famous for its dramatic elevation changes and the high-speed Eau Rouge-Raidillon combination that tests driver bravery.",
    circuitSlug: "belgian-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 44,
      raceDistance: "308.052 km",
      lapRecord: "1:46.286",
      drsZones: 2,
      corners: 19
    }
  },
  "nld-2026": {
    raceId: "nld-2026",
    overview: "The Dutch Grand Prix at Zandvoort promises an electric atmosphere. Nestled among seaside dunes, the track features challenging banked corners and a rollercoaster flow that punishes any mistake.",
    history: "Zandvoort originally opened in 1948 and hosted classic races throughout the 60s and 70s. After a long hiatus, it returned in 2021 with modernized bankings at Turns 3 and 14, creating a unique challenge in modern F1.",
    circuitSlug: "dutch-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 72,
      raceDistance: "306.587 km",
      lapRecord: "1:11.097",
      drsZones: 2,
      corners: 14
    }
  },
  "ita-mza-2026": {
    raceId: "ita-mza-2026",
    overview: "Monza, the historic 'Temple of Speed', hosts the Italian Grand Prix. Teams run ultra-low downforce setups to maximize top speeds on the long straights, resulting in intense slipstreaming battles.",
    history: "Monza is the oldest purpose-built racing circuit in continental Europe, constructed in 1922. It features high-speed straights and famous corners like the Curva Grande, Lesmo, and Parabolica.",
    circuitSlug: "italian-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 53,
      raceDistance: "306.720 km",
      lapRecord: "1:21.046",
      drsZones: 2,
      corners: 11
    }
  },
  "aze-2026": {
    raceId: "aze-2026",
    overview: "The Azerbaijan Grand Prix on the streets of Baku is renowned for producing unpredictable and chaotic races. It combines a wide, ultra-fast 2km straight with a tight, medieval castle section.",
    history: "Baku City Circuit debuted in 2016. Designed by Hermann Tilke, the street circuit flows past Baku's modern waterfront skyscrapers and the narrow, historic walls of the old city center.",
    circuitSlug: "azerbaijan-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 51,
      raceDistance: "306.049 km",
      lapRecord: "1:43.009",
      drsZones: 2,
      corners: 20
    }
  },
  "sgp-2026": {
    raceId: "sgp-2026",
    overview: "The Singapore Grand Prix at Marina Bay is a grueling physical test. Held under floodlights in high humidity, the street circuit features 19 corners and requires maximum downforce and driver focus.",
    history: "Marina Bay hosted Formula One's first-ever night race in 2008. Weaving through Singapore's downtown core, it is one of the most physically exhausting events of the season due to the heat and lack of straights.",
    circuitSlug: "singapore-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 62,
      raceDistance: "306.143 km",
      lapRecord: "1:35.867",
      drsZones: 4,
      corners: 19
    }
  },
  "usa-cot-2026": {
    raceId: "usa-cot-2026",
    overview: "The United States Grand Prix returns to the Circuit of the Americas (COTA) in Austin. The track features a mix of challenging corners inspired by other famous F1 venues, along with a steep, blind climb to Turn 1.",
    history: "COTA was the first purpose-built F1 facility in the United States, opening in 2012. It has quickly become a fan and driver favorite, known for its festive atmosphere and excellent overtaking opportunities.",
    circuitSlug: "united-states-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 56,
      raceDistance: "308.405 km",
      lapRecord: "1:36.169",
      drsZones: 2,
      corners: 20
    }
  },
  "mex-2026": {
    raceId: "mex-2026",
    overview: "The Mexican Grand Prix at Autódromo Hermanos Rodríguez takes place at high altitude, thin air reducing engine performance and downforce. It features a stadium section packed with passionate fans.",
    history: "First hosting F1 in 1963, the Mexico City circuit is named after the legendary racing brothers Ricardo and Pedro Rodríguez. The track runs through the former Foro Sol baseball stadium, offering unmatched crowd energy.",
    circuitSlug: "mexico-city-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 71,
      raceDistance: "305.354 km",
      lapRecord: "1:17.774",
      drsZones: 3,
      corners: 17
    }
  },
  "bra-2026": {
    raceId: "bra-2026",
    overview: "The Brazilian Grand Prix at Interlagos in São Paulo is a classic anticlockwise track. Renowned for elevation changes and unpredictable weather, it has hosted numerous historic championship deciders.",
    history: "Autódromo José Carlos Pace, commonly known as Interlagos, opened in 1940. It is named after the Brazilian driver José Carlos Pace and is famous for its demanding infield section and long uphill straight.",
    circuitSlug: "sao-paulo-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 71,
      raceDistance: "305.879 km",
      lapRecord: "1:10.540",
      drsZones: 2,
      corners: 15
    }
  },
  "qat-2026": {
    raceId: "qat-2026",
    overview: "The Qatar Grand Prix at Lusail International Circuit is a fast, flowing race under the desert floodlights. The track consists of sweeping medium- and high-speed corners that test aerodynamic grip.",
    history: "Lusail was primarily known for hosting MotoGP before hosting its first Formula One race in 2021. It became a permanent fixture on the F1 calendar from 2023 onwards, with a state-of-the-art paddock facility.",
    circuitSlug: "qatar-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 57,
      raceDistance: "308.611 km",
      lapRecord: "1:24.319",
      drsZones: 2,
      corners: 16
    }
  },
  "are-2026": {
    raceId: "are-2026",
    overview: "The Abu Dhabi Grand Prix at Yas Marina hosts the season finale. The twilight race starts under the setting sun and finishes under bright floodlights, passing around the yacht-filled marina.",
    history: "Yas Marina Circuit debuted as the season finale in 2009. Designed as a luxury sporting venue, the track underwent layout modifications in 2021 to flow faster and improve overtaking opportunities.",
    circuitSlug: "abu-dhabi-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 58,
      raceDistance: "306.183 km",
      lapRecord: "1:26.103",
      drsZones: 2,
      corners: 16
    }
  },
  "can-2026": {
    raceId: "can-2026",
    overview: "The Canadian Grand Prix is held on the island semi-street circuit Gilles Villeneuve in Montreal. It features long straights, heavy braking zones, and the famous 'Wall of Champions'.",
    history: "Montreal's circuit on Notre Dame Island hosted its first Grand Prix in 1978, won by Canadian legend Gilles Villeneuve, after whom the track was subsequently renamed. It is known for its close barriers and unpredictable weather.",
    circuitSlug: "canadian-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 70,
      raceDistance: "305.270 km",
      lapRecord: "1:13.078",
      drsZones: 3,
      corners: 14
    }
  },
  "deu-2026": {
    raceId: "deu-2026",
    overview: "The German Grand Prix at the Hockenheimring makes its return to the F1 calendar. It features a technical stadium section and fast straights that challenge both mechanical and aerodynamic setups.",
    history: "Originally built in 1932, the Hockenheimring was famous for its long, high-speed straights through the forest. It was completely redesigned in 2002 by Hermann Tilke, shortening the track to create a modern layout with better overtaking zones.",
    circuitSlug: "german-grand-prix",
    podium: [],
    fastestLap: null,
    gallery: [],
    winnerHistory: [],
    statistics: {
      totalLaps: 67,
      raceDistance: "306.458 km",
      lapRecord: "1:13.780",
      drsZones: 2,
      corners: 17
    }
  }
};
