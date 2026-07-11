import type { CircuitDetails } from "@/types/circuit-details";

export const circuitDetails: Record<string, CircuitDetails> = {
  bahrain: {
    circuitId: "bahrain",
    overview: "Located in the Sakhir desert, the Bahrain International Circuit is known for its high-braking zones and wide track, which offers several overtaking opportunities. It was the first Formula 1 circuit built in the Middle East and is famous for spectacular floodlit night races.",
    history: "Designed by Hermann Tilke, construction began in 2002. The circuit held its first Grand Prix in 2004, won by Michael Schumacher in the dominant Ferrari F2004. In 2014, it transitioned to a night race layout under state-of-the-art floodlights.",
    sectors: [
      {
        sector: 1,
        name: "Start/Finish & Heavy Braking",
        description: "Focuses on straight-line speed followed by extreme braking into Turn 1, leading through a technical traction-critical uphill complex.",
        characteristics: ["Heavy braking", "Overtaking zone", "Uphill acceleration"]
      },
      {
        sector: 2,
        name: "Technical Infield",
        description: "A highly technical sector requiring excellent balance, featuring the tricky downhill braking at Turn 10 and the high-speed sweepers of Turns 11 and 12.",
        characteristics: ["Off-camber corners", "Downhill braking", "Lateral load"]
      },
      {
        sector: 3,
        name: "Power & Back Straight",
        description: "Consists of a fast right-hander at Turn 13 leading onto the long back straight and the final double-apex turn back to the grid.",
        characteristics: ["Traction control", "DRS straight", "Engine cooling"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:31:38.291" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:31:44.742" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:33:56.736" }
    ],
    trackRecords: [
      { category: "Outright Lap Record", driver: "Pedro de la Rosa", team: "McLaren", lapTime: "1:31.447", year: 2005 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:27.264", year: 2020 }
    ],
    cornerDetails: [
      { number: 1, name: "Michael Schumacher Turn", type: "Tight Hairpin", speed: 85 },
      { number: 4, name: "Oasis", type: "Medium Right-Hander", speed: 140 },
      { number: 10, name: "Desert Hairpin", type: "Off-Camber Left", speed: 80 }
    ],
    gallery: [
      "/images/circuits/bahrain-gallery-1.jpg",
      "/images/circuits/bahrain-gallery-2.jpg",
      "/images/circuits/bahrain-gallery-3.jpg"
    ]
  },
  jeddah: {
    circuitId: "jeddah",
    overview: "The Jeddah Corniche Circuit is Formula One's fastest street circuit, featuring high-speed sweeping corners along the Red Sea coast. It demands extreme concentration, with concrete walls lining the narrow track.",
    history: "Debuting in December 2021 as the penultimate round of that season, the circuit was designed by Carsten Tilke. It became an instant classic due to its high speeds and intense wheel-to-wheel battles.",
    sectors: [
      {
        sector: 1,
        name: "Chicanes and Flow",
        description: "Starts with the tight Turns 1-2 chicane before building up speed through a continuous ribbon of blind walls.",
        characteristics: ["Rapid change of direction", "Tight chicanes", "Wall proximity"]
      },
      {
        sector: 2,
        name: "High-Speed S-Curves",
        description: "Features a series of extremely fast left-right combinations that test aerodynamic efficiency and car stability.",
        characteristics: ["Full throttle", "Sweeping blind turns", "High lateral Gs"]
      },
      {
        sector: 3,
        name: "Hairpin & Coastline Straight",
        description: "Includes the banked Turn 13 loop, the fast back straight, and the final Turn 27 hairpin before the start line.",
        characteristics: ["Banked corner", "Heavy braking hairpin", "DRS drafting"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:27:14.331" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:20:43.273" },
      { year: 2023, driver: "Sergio Perez", team: "Red Bull Racing", time: "1:21:14.894" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:30.734", year: 2021 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:27.511", year: 2021 }
    ],
    cornerDetails: [
      { number: 2, name: "Jeddah Chicane Exit", type: "Left-Hander", speed: 110 },
      { number: 13, name: "The Loop", type: "Banked Hairpin", speed: 170 },
      { number: 22, name: "High-Speed S-Curve Entry", type: "Fast Left-Hander", speed: 250 }
    ],
    gallery: [
      "/images/circuits/jeddah-gallery-1.jpg",
      "/images/circuits/jeddah-gallery-2.jpg",
      "/images/circuits/jeddah-gallery-3.jpg"
    ]
  },
  melbourne: {
    circuitId: "melbourne",
    overview: "Set around Albert Park Lake, this semi-permanent circuit offers a picturesque backdrop combined with a fast, flowing layout. Modifications in 2022 increased the speed and created more racing action.",
    history: "Albert Park replaced Adelaide as the host of the Australian GP in 1996. The inaugural Melbourne race was won by Damon Hill for Williams. The track underwent significant re-profiling ahead of the 2022 event.",
    sectors: [
      {
        sector: 1,
        name: "Lakeside Opening",
        description: "Fast straight leading into Turn 1-2 chicane, followed by the tight right-hander at Turn 3 and lake-adjacent acceleration zones.",
        characteristics: ["Bumpy braking", "Traction out of slow corners", "Kerb riding"]
      },
      {
        sector: 2,
        name: "High-Speed Sweeper",
        description: "Features the reprofiled high-speed section along the lake, leading into the quick left-right chicane at Turn 9-10.",
        characteristics: ["High-speed sweepers", "Aerodynamic load", "No room for error"]
      },
      {
        sector: 3,
        name: "Technical Finale",
        description: "A combination of medium-speed turns concluding with the double-right turn onto the main straight.",
        characteristics: ["Understeer management", "Precision positioning", "Close walls"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Charles Leclerc", team: "Ferrari", time: "1:24:28.192" },
      { year: 2024, driver: "Carlos Sainz", team: "Ferrari", time: "1:20:26.843" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "2:32:38.371" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Charles Leclerc", team: "Ferrari", lapTime: "1:19.813", year: 2024 },
      { category: "Qualifying Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:15.915", year: 2024 }
    ],
    cornerDetails: [
      { number: 1, name: "Jones Corner", type: "Chicane Entrance", speed: 140 },
      { number: 9, name: "Waite Corner", type: "High-Speed Chicane", speed: 235 },
      { number: 13, name: "Ascari Corner", type: "Tight Right", speed: 115 }
    ],
    gallery: [
      "/images/circuits/melbourne-gallery-1.jpg",
      "/images/circuits/melbourne-gallery-2.jpg",
      "/images/circuits/melbourne-gallery-3.jpg"
    ]
  },
  suzuka: {
    circuitId: "suzuka",
    overview: "Suzuka is one of the world's most demanding circuits, featuring a unique figure-eight layout. Loved by drivers, it tests every aspect of a car's aerodynamic efficiency and suspension balance.",
    history: "Built in 1962 by Honda as a test facility, Suzuka held its first F1 race in 1987. It was the scene of iconic championship battles, particularly between Ayrton Senna and Alain Prost in the late 1980s.",
    sectors: [
      {
        sector: 1,
        name: "The Esses",
        description: "Starts with the high-speed Turn 1-2 and flows directly into the famous uphill S-curves, requiring rhythmic driving.",
        characteristics: ["Lateral G transition", "Rhythm and balance", "High downforce"]
      },
      {
        sector: 2,
        name: "Degners & Hairpin",
        description: "Starts under the bridge, encompassing the double-apex Degner corners, the hairpin, and Spoon Curve.",
        characteristics: ["Precision line", "Traction braking", "Under-bridge crossover"]
      },
      {
        sector: 3,
        name: "130R and Chicane",
        description: "Features the legendary flat-out 130R left-hander and the tight Casio Triangle chicane leading to the start-finish straight.",
        characteristics: ["Flat-out turn", "Heavy braking chicane", "Slipstreaming"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:26:33.419" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:54:23.566" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:30:58.421" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:30.983", year: 2019 },
      { category: "Qualifying Lap Record", driver: "Sebastian Vettel", team: "Ferrari", lapTime: "1:27.064", year: 2019 }
    ],
    cornerDetails: [
      { number: 4, name: "First S-Curve", type: "Flowing Right-Left", speed: 210 },
      { number: 11, name: "Hairpin", type: "Tight Hairpin", speed: 65 },
      { number: 15, name: "130R", type: "Flat-Out Left-Hander", speed: 300 }
    ],
    gallery: [
      "/images/circuits/suzuka-gallery-1.jpg",
      "/images/circuits/suzuka-gallery-2.jpg",
      "/images/circuits/suzuka-gallery-3.jpg"
    ]
  },
  shanghai: {
    circuitId: "shanghai",
    overview: "Built to represent the Chinese character 'shang', the Shanghai International Circuit features a combination of high-speed straights, sweeping curves, and the uniquely tightening Turn 1-4 complex.",
    history: "Another Hermann Tilke masterpiece, the track opened in 2004 with Rubens Barrichello winning the first race for Ferrari. It features a massive main grandstand overlooking the start-finish straight.",
    sectors: [
      {
        sector: 1,
        name: "The Snail Corner",
        description: "Dominated by the tightening right-hand loop of Turns 1-2-3-4 that places immense energy into the front-left tire.",
        characteristics: ["Long tightening corner", "Tire scrubbing", "Understeer"]
      },
      {
        sector: 2,
        name: "Infield and Banked Turn 13",
        description: "Technical central sector featuring mid-speed chicanes and the long, banking right-hander that leads onto the back straight.",
        characteristics: ["Technical balance", "Banked sweeper", "Traction out"]
      },
      {
        sector: 3,
        name: "Long Straight and Hairpin",
        description: "The 1.2km back straight concludes in a heavy braking zone at Turn 14, followed by the final corner.",
        characteristics: ["Long straight", "Overtaking hairpin", "Engine power"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:32:09.112" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:40:52.554" },
      { year: 2019, driver: "Lewis Hamilton", team: "Mercedes", time: "1:32:06.350" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Michael Schumacher", team: "Ferrari", lapTime: "1:32.238", year: 2004 },
      { category: "Qualifying Lap Record", driver: "Sebastian Vettel", team: "Ferrari", lapTime: "1:31.095", year: 2018 }
    ],
    cornerDetails: [
      { number: 1, name: "Snail Entry", type: "Tightening Right Loop", speed: 120 },
      { number: 13, name: "Banked Entry", type: "Banked Right-Hander", speed: 175 },
      { number: 14, name: "Main Hairpin", type: "Heavy Braking Left", speed: 70 }
    ],
    gallery: [
      "/images/circuits/shanghai-gallery-1.jpg",
      "/images/circuits/shanghai-gallery-2.jpg",
      "/images/circuits/shanghai-gallery-3.jpg"
    ]
  },
  miami: {
    circuitId: "miami",
    overview: "Built around the Hard Rock Stadium, this modern street-style circuit blends long straights, technical complexes, and high speeds, delivering an American sporting spectacle.",
    history: "Miami joined the F1 calendar in 2022. Max Verstappen won the inaugural Grand Prix after an intense battle with Charles Leclerc, establishing the venue as a marquee event in the US expansion.",
    sectors: [
      {
        sector: 1,
        name: "Sweeping Opening",
        description: "Features flowing high-speed corners leading into the Turn 6-7-8 looping complex.",
        characteristics: ["High-speed sweepers", "Aerodynamic stability", "Wide exits"]
      },
      {
        sector: 2,
        name: "Technical Overpass",
        description: "A slow-speed sector underneath the turnpike overpass, featuring a tight chicane and blind crests.",
        characteristics: ["Slow chicane", "Elevation change", "Bumpy surface"]
      },
      {
        sector: 3,
        name: "Power Zone",
        description: "Encompasses the long back straight and the heavy braking zone into the final left-hander.",
        characteristics: ["Engine power", "Drafting zone", "Braking stability"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:30:49.801" },
      { year: 2024, driver: "Lando Norris", team: "McLaren", time: "1:30:49.876" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:38.241" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:29.708", year: 2023 },
      { category: "Qualifying Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:27.241", year: 2024 }
    ],
    cornerDetails: [
      { number: 7, name: "Marina Curve", type: "Sweeping Right", speed: 200 },
      { number: 14, name: "Stadium Chicane", type: "Tight Left-Right Chicane", speed: 75 },
      { number: 17, name: "Turnpike Hairpin", type: "Left Hairpin", speed: 80 }
    ],
    gallery: [
      "/images/circuits/miami-gallery-1.jpg",
      "/images/circuits/miami-gallery-2.jpg",
      "/images/circuits/miami-gallery-3.jpg"
    ]
  },
  imola: {
    circuitId: "imola",
    overview: "Autodromo Enzo e Dino Ferrari is a classic anti-clockwise circuit characterized by elevation changes, high speeds, and legendary corners situated in the Emilia-Romagna region.",
    history: "Opening in 1953, it hosted the Italian GP in 1980 and the San Marino GP from 1981 to 2006. The circuit returned to the F1 calendar in 2020 as the Emilia-Romagna Grand Prix.",
    sectors: [
      {
        sector: 1,
        name: "Tamburello and Villeneuve",
        description: "Features high-speed blast from start line through the Tamburello and Villeneuve chicanes.",
        characteristics: ["Kerb riding", "Chicane agility", "Power delivery"]
      },
      {
        sector: 2,
        name: "Tosa & Acque Minerali",
        description: "Encompasses the slow uphill Tosa hairpin, Piratella downhill, and the fast double-apex Acque Minerali.",
        characteristics: ["Uphill braking", "Blind crests", "Compression load"]
      },
      {
        sector: 3,
        name: "Rivazza & Start Straight",
        description: "Downhill braking at Rivazza leading into the flat-out run back toward the pit lane entry.",
        characteristics: ["Off-balance braking", "Short DRS zone", "Traction control"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Charles Leclerc", team: "Ferrari", time: "1:25:21.461" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:25:25.252" },
      { year: 2022, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:32:07.986" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:15.484", year: 2020 },
      { category: "Qualifying Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:13.609", year: 2020 }
    ],
    cornerDetails: [
      { number: 2, name: "Tamburello", type: "Left-Right Chicane", speed: 185 },
      { number: 7, name: "Tosa", type: "Uphill Left Hairpin", speed: 95 },
      { number: 12, name: "Acque Minerali", type: "Fast Right-Right", speed: 205 }
    ],
    gallery: [
      "/images/circuits/imola-gallery-1.jpg",
      "/images/circuits/imola-gallery-2.jpg",
      "/images/circuits/imola-gallery-3.jpg"
    ]
  },
  monaco: {
    circuitId: "monaco",
    overview: "The Circuit de Monaco is the crown jewel of the F1 calendar. It is an extremely narrow street circuit with no margin for error, demanding supreme precision, confidence, and qualifying speed.",
    history: "First run in 1929, Monaco was part of the inaugural World Championship in 1950. Its layout has remained largely unchanged, winding through the glamorous harbour of Monte Carlo.",
    sectors: [
      {
        sector: 1,
        name: "Sainte Devote to Casino",
        description: "Braking into Turn 1, uphill run through Beau Rivage, and the sweeping Casino Square left-hander.",
        characteristics: ["Bumpy uphill acceleration", "Narrow barriers", "Blind apexes"]
      },
      {
        sector: 2,
        name: "Mirabeau, Hairpin & Tunnel",
        description: "The tightest hairpin in F1, through Portier, and out into the flat-out dark tunnel curve.",
        characteristics: ["Maximum lock steering", "Low speed", "Light-to-dark transition"]
      },
      {
        sector: 3,
        name: "Chicane, Tabac & Swimming Pool",
        description: "Heavy braking out of the tunnel, the fast Tabac corner, and the high-speed Swimming Pool chicane.",
        characteristics: ["Kerb clipping", "High speed direction change", "Precise exit traction"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Charles Leclerc", team: "Ferrari", time: "1:43:16.224" },
      { year: 2024, driver: "Charles Leclerc", team: "Ferrari", time: "2:23:15.554" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:48:51.980" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:12.909", year: 2021 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:10.166", year: 2019 }
    ],
    cornerDetails: [
      { number: 1, name: "Sainte Devote", type: "Right-Hander", speed: 90 },
      { number: 6, name: "Grand Hotel Hairpin", type: "Tightest Left", speed: 45 },
      { number: 12, name: "Tabac", type: "Left-Hander", speed: 160 }
    ],
    gallery: [
      "/images/circuits/monaco-gallery-1.jpg",
      "/images/circuits/monaco-gallery-2.jpg",
      "/images/circuits/monaco-gallery-3.jpg"
    ]
  },
  montreal: {
    circuitId: "montreal",
    overview: "Circuit Gilles Villeneuve is a fast semi-permanent track situated on Notre Dame Island. It is characterized by long straights, chicanes, low downforce setups, and close concrete barriers.",
    history: "Renamed in honor of legendary Canadian driver Gilles Villeneuve following his death, this track hosted its first race in 1978, which Villeneuve famously won for Ferrari.",
    sectors: [
      {
        sector: 1,
        name: "Senna 'S' to Pont de la Concorde",
        description: "Starts with the complex Turn 1-2 loop, followed by quick chicanes leading under the bridge.",
        characteristics: ["Direction change", "Kerb traction", "Heavy fuel weight"]
      },
      {
        sector: 2,
        name: "L'Epingle Approach",
        description: "A fast layout section with chicanes leading down to the tight L'Epingle hairpin.",
        characteristics: ["Heavy braking", "Medium speed sweepers", "Traction out"]
      },
      {
        sector: 3,
        name: "Gilles Villeneuve Straight",
        description: "The long back straight leading into the final chicane and the famous Wall of Champions.",
        characteristics: ["Engine power", "Extreme braking", "Wall proximity"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:35:41.310" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:33:57.079" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:25:53.949" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:13.078", year: 2019 },
      { category: "Qualifying Lap Record", driver: "Sebastian Vettel", team: "Ferrari", lapTime: "1:10.240", year: 2019 }
    ],
    cornerDetails: [
      { number: 2, name: "Senna Curve", type: "Looping Right-Left", speed: 95 },
      { number: 10, name: "L'Epingle", type: "Tight Hairpin", speed: 60 },
      { number: 14, name: "Wall of Champions", type: "Chicane Exit Wall", speed: 145 }
    ],
    gallery: [
      "/images/circuits/montreal-gallery-1.jpg",
      "/images/circuits/montreal-gallery-2.jpg",
      "/images/circuits/montreal-gallery-3.jpg"
    ]
  },
  silverstone: {
    circuitId: "silverstone",
    overview: "Silverstone is a historic and fast-flowing circuit that tests aerodynamic load to its limit. Featuring legendary corners like Copse, Maggotts, and Becketts, it is a favorite for drivers and fans alike.",
    history: "A former World War II airfield, Silverstone hosted the very first World Championship Grand Prix in 1950. It remains the spiritual home of British motorsport and F1 racing.",
    sectors: [
      {
        sector: 1,
        name: "Abbey to Wellington Straight",
        description: "Begins with the flat-out Turn 1 (Abbey) and Turn 2, through Arena complex onto the straight.",
        characteristics: ["High speed entrance", "Slow technical infield", "DRS acceleration"]
      },
      {
        sector: 2,
        name: "Copse, Maggotts & Becketts",
        description: "The high-speed heart of the circuit, featuring the flat-out Copse and the rapid Maggotts-Becketts-Chapel sequence.",
        characteristics: ["Maximum aerodynamic load", "Rhythm flow", "Extreme G-forces"]
      },
      {
        sector: 3,
        name: "Stowe, Vale & Club",
        description: "Uphill braking at Stowe, leading into the slow Vale chicane and the long accelerating Club corner.",
        characteristics: ["High-speed entry stability", "Heavy braking", "Traction acceleration"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:19:42.109" },
      { year: 2024, driver: "Lewis Hamilton", team: "Mercedes", time: "1:22:27.059" },
      { year: 2023, driver: "Lewis Hamilton", team: "Mercedes", time: "1:25:08.510" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:27.097", year: 2020 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:24.303", year: 2020 }
    ],
    cornerDetails: [
      { number: 9, name: "Copse", type: "Flat-Out Right-Hander", speed: 285 },
      { number: 12, name: "Becketts", type: "High-Speed Sweeping Left", speed: 235 },
      { number: 15, name: "Stowe", type: "Fast Right-Hander", speed: 200 }
    ],
    gallery: [
      "/images/circuits/silverstone-gallery-1.jpg",
      "/images/circuits/silverstone-gallery-2.jpg",
      "/images/circuits/silverstone-gallery-3.jpg"
    ]
  },
  spa: {
    circuitId: "spa",
    overview: "Set in the Ardennes forest, Spa-Francorchamps is a legendary circuit featuring dramatic elevation changes and iconic corners. The microclimate of the region often brings mixed wet and dry conditions.",
    history: "Originally formed using public roads in 1921, Spa was a high-speed triangle. Re-designed in 1979 into the current layout, it remains one of the ultimate tests of racing driver skill.",
    sectors: [
      {
        sector: 1,
        name: "La Source & Kemmel Straight",
        description: "Starts at the tight La Source hairpin before descending down to Eau Rouge, Raidillon, and flat-out Kemmel.",
        characteristics: ["Heavy compression Gs", "Long flat-out run", "Overtaking zone"]
      },
      {
        sector: 2,
        name: "Les Combes to Paul Frere",
        description: "The technical middle sector, starting at the Les Combes chicane, through Bruxelles, Pouhon, and Fagnes.",
        characteristics: ["High speed left-hander", "Downforce critical", "Complex braking"]
      },
      {
        sector: 3,
        name: "Blanchimont & Bus Stop",
        description: "Flat-out run through Blanchimont, ending in the heavy braking Bus Stop chicane before the grid.",
        characteristics: ["Flat-out sweeper", "Heavy braking", "Traction out"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lewis Hamilton", team: "Mercedes", time: "1:18:29.419" },
      { year: 2024, driver: "Lewis Hamilton", team: "Mercedes", time: "1:19:57.566" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:22:30.450" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:46.286", year: 2018 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:41.252", year: 2020 }
    ],
    cornerDetails: [
      { number: 1, name: "La Source", type: "Right Hairpin", speed: 80 },
      { number: 4, name: "Eau Rouge / Raidillon", type: "Uphill Compression Chicane", speed: 290 },
      { number: 10, name: "Pouhon", type: "Double Left-Hander", speed: 220 }
    ],
    gallery: [
      "/images/circuits/spa-gallery-1.jpg",
      "/images/circuits/spa-gallery-2.jpg",
      "/images/circuits/spa-gallery-3.jpg"
    ]
  },
  hungaroring: {
    circuitId: "hungaroring",
    overview: "The Hungaroring is a dusty, twisty, and tight circuit situated in a natural valley near Budapest. Often described as 'Monaco without walls', it demands high downforce and excellent tire management.",
    history: "Opened in 1986, it was the first Grand Prix held behind the Iron Curtain. It has been a permanent fixture ever since, offering technical racing in hot summer temperatures.",
    sectors: [
      {
        sector: 1,
        name: "Start Straight to Turn 3",
        description: "Heavy braking at Turn 1 followed by acceleration into Turn 2 and the blind uphill Turn 3.",
        characteristics: ["Overtaking zone", "Downhill entry", "Uphill acceleration"]
      },
      {
        sector: 2,
        name: "The Twisty Infield",
        description: "A continuous flow of medium-speed corners with no straights, testing car balance and driver rhythm.",
        characteristics: ["Continuous cornering", "Chicane balance", "High temperature load"]
      },
      {
        sector: 3,
        name: "Final Sweepers",
        description: "Features the final two wide right-hand turns leading back to the pit straight.",
        characteristics: ["Tire wear", "Late apex", "Traction traction"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Oscar Piastri", team: "McLaren", time: "1:37:45.311" },
      { year: 2024, driver: "Oscar Piastri", team: "McLaren", time: "1:38:01.989" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:38:08.634" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:16.627", year: 2020 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:13.447", year: 2020 }
    ],
    cornerDetails: [
      { number: 1, name: "Turn 1 Hairpin", type: "Downhill Right", speed: 95 },
      { number: 4, name: "Turn 4 Fast Left", type: "Blind Uphill Left", speed: 215 },
      { number: 12, name: "Turn 12 Right", type: "90-degree Right", speed: 120 }
    ],
    gallery: [
      "/images/circuits/hungaroring-gallery-1.jpg",
      "/images/circuits/hungaroring-gallery-2.jpg",
      "/images/circuits/hungaroring-gallery-3.jpg"
    ]
  },
  zandvoort: {
    circuitId: "zandvoort",
    overview: "Nestled in the coastal dunes of the Netherlands, Circuit Zandvoort is a historic, rollercoaster-style track featuring steep banking, sweeping curves, and a passionate orange-clad crowd.",
    history: "Opening in 1948, Zandvoort hosted F1 until 1985. It returned in 2021 after a major modernization that added unique banking at Turns 3 and 14 to enhance wheel-to-wheel battles.",
    sectors: [
      {
        sector: 1,
        name: "Tarzan & Banked Hugenholtz",
        description: "Heavy braking into Tarzan, accelerating through the steeply banked Hugenholtz hairpin.",
        characteristics: ["Banked hairpin", "Off-camber braking", "Heavy wind influence"]
      },
      {
        sector: 2,
        name: "Dunes Rollercoaster",
        description: "High-speed sweepers flowing through the sand dunes, requiring absolute commitment.",
        characteristics: ["Blind crests", "Elevation changes", "Narrow track"]
      },
      {
        sector: 3,
        name: "Arie Luyendyk Banking",
        description: "Technical chicane leading onto the final high-speed banked Turn 14 onto the main straight.",
        characteristics: ["18-degree banking", "DRS on banking", "High compression"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:30:45.502" },
      { year: 2024, driver: "Lando Norris", team: "McLaren", time: "1:30:45.519" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "2:24:04.411" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:11.097", year: 2021 },
      { category: "Qualifying Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:08.885", year: 2021 }
    ],
    cornerDetails: [
      { number: 1, name: "Tarzan Bocht", type: "Slightly Banked Hairpin", speed: 105 },
      { number: 3, name: "Hugenholtz Bocht", type: "Progressively Banked Left", speed: 90 },
      { number: 14, name: "Arie Luyendyk Bocht", type: "High-Speed Banking", speed: 245 }
    ],
    gallery: [
      "/images/circuits/zandvoort-gallery-1.jpg",
      "/images/circuits/zandvoort-gallery-2.jpg",
      "/images/circuits/zandvoort-gallery-3.jpg"
    ]
  },
  monza: {
    circuitId: "monza",
    overview: "Known as the 'Temple of Speed', Monza is F1's oldest and fastest permanent circuit, featuring long straights and tight chicanes where engine power and low drag are crucial.",
    history: "Opened in 1922 in the Royal park, Monza has hosted every Italian Grand Prix since 1950, except for the 1980 race. It is the spiritual home of Scuderia Ferrari and the Tifosi.",
    sectors: [
      {
        sector: 1,
        name: "Rettifilo to Curva Grande",
        description: "Heavy braking from 350km/h into the Prima Variante chicane, leading into the sweeping Curva Grande.",
        characteristics: ["Extreme braking", "Chicane kerbs", "High speed curve"]
      },
      {
        sector: 2,
        name: "Roggia & Lesmo Curves",
        description: "Features Roggia chicane, followed by the double right-handers of Lesmo 1 and 2.",
        characteristics: ["Kerb jumping", "Traction limit", "Aero balance"]
      },
      {
        sector: 3,
        name: "Ascari & Parabolica",
        description: "The fast left-right-left Ascari chicane, leading onto the back straight and the historic Alboreto (Parabolica) curve.",
        characteristics: ["High-speed chicane exit", "Long radius right", "Slipstream run"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Charles Leclerc", team: "Ferrari", time: "1:15:06.120" },
      { year: 2024, driver: "Charles Leclerc", team: "Ferrari", time: "1:14:40.727" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:13:41.143" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Rubens Barrichello", team: "Ferrari", lapTime: "1:21.046", year: 2004 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:18.887", year: 2020 }
    ],
    cornerDetails: [
      { number: 1, name: "Variante del Rettifilo", type: "Slow Chicane", speed: 75 },
      { number: 8, name: "Variante Ascari", type: "High-Speed Chicane", speed: 195 },
      { number: 11, name: "Curva Alboreto (Parabolica)", type: "Long Right Sweeper", speed: 215 }
    ],
    gallery: [
      "/images/circuits/monza-gallery-1.jpg",
      "/images/circuits/monza-gallery-2.jpg",
      "/images/circuits/monza-gallery-3.jpg"
    ]
  },
  baku: {
    circuitId: "baku",
    overview: "Winding through Azerbaijan's capital, the Baku City Circuit combines a massive 2.2km flat-out straight with the tight, slow Castle section, creating dramatic, unpredictable races.",
    history: "Baku hosted its first F1 race in 2016 as the European Grand Prix before becoming the Azerbaijan Grand Prix in 2017. It has a reputation for high drama, crashes, and safety cars.",
    sectors: [
      {
        sector: 1,
        name: "Grid to Turn 4",
        description: "A grid of 90-degree corners designed for wheel-to-wheel battles and draft overtaking.",
        characteristics: ["Heavy braking 90-degree corners", "Wide streets", "Traction out"]
      },
      {
        sector: 2,
        name: "The Castle Section",
        description: "Extremely narrow layout passing the medieval old city wall (Turn 8 is just 7.6m wide), leading uphill.",
        characteristics: ["Ultra-narrow barriers", "Uphill steering", "High risk of crashes"]
      },
      {
        sector: 3,
        name: "Full Throttle to Line",
        description: "Descending through fast sweeps leading onto the massive 2.2km flat-out acceleration zone.",
        characteristics: ["Full throttle sweepers", "Maximum speed", "Slipstreaming draft"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "George Russell", team: "Mercedes", time: "1:32:56.221" },
      { year: 2024, driver: "Oscar Piastri", team: "McLaren", time: "1:32:58.007" },
      { year: 2023, driver: "Sergio Perez", team: "Red Bull Racing", time: "1:32:42.436" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Charles Leclerc", team: "Ferrari", lapTime: "1:43.009", year: 2019 },
      { category: "Qualifying Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:40.495", year: 2019 }
    ],
    cornerDetails: [
      { number: 1, name: "Bulvar Corner", type: "90-degree Left", speed: 110 },
      { number: 8, name: "Castle Turn", type: "Ultra-Narrow Left", speed: 60 },
      { number: 15, name: "Shemakha Downhill", type: "Downhill Left", speed: 145 }
    ],
    gallery: [
      "/images/circuits/baku-gallery-1.jpg",
      "/images/circuits/baku-gallery-2.jpg",
      "/images/circuits/baku-gallery-3.jpg"
    ]
  },
  "marina-bay": {
    circuitId: "marina-bay",
    overview: "Singapore's Marina Bay Street Circuit is a physically demanding street track run under high humidity. Drivers face bumpiness and close walls over a long, technical layout.",
    history: "In 2008, Singapore hosted F1's first-ever night race. The inaugural event was won by Fernando Alonso. The layout was modified in 2023, removing four corners to create a faster layout.",
    sectors: [
      {
        sector: 1,
        name: "Republic Boulevard Sweep",
        description: "Starts at the Turn 1-2-3 complex before accelerating down to the heavy braking zones.",
        characteristics: ["Bumpy street braking", "Direction transition", "Wall proximity"]
      },
      {
        sector: 2,
        name: "Downtown Infield",
        description: "Technical street section through the civic district, with slow 90-degree corners and tight exits.",
        characteristics: ["90-degree turns", "Extreme heat load", "Understeer"]
      },
      {
        sector: 3,
        name: "Bay Section",
        description: "Features the new fast straight replacing the old bay grandstand turns, leading to the final corners.",
        characteristics: ["Acceleration zone", "Braking stability", "Traction out of final turn"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:40:50.576" },
      { year: 2024, driver: "Lando Norris", team: "McLaren", time: "1:40:50.516" },
      { year: 2023, driver: "Carlos Sainz", team: "Ferrari", time: "1:46:37.418" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Daniel Ricciardo", team: "RB", lapTime: "1:34.486", year: 2024 },
      { category: "Qualifying Lap Record", driver: "Lando Norris", team: "McLaren", lapTime: "1:29.525", year: 2024 }
    ],
    cornerDetails: [
      { number: 1, name: "Sheares Corner", type: "Left-Right Chicane", speed: 90 },
      { number: 7, name: "Memorial Corner", type: "90-degree Left", speed: 115 },
      { number: 14, name: "Connaught Bridge", type: "Right-Hander", speed: 85 }
    ],
    gallery: [
      "/images/circuits/singapore-gallery-1.jpg",
      "/images/circuits/singapore-gallery-2.jpg",
      "/images/circuits/singapore-gallery-3.jpg"
    ]
  },
  cota: {
    circuitId: "cota",
    overview: "The Circuit of the Americas is a world-class venue in Austin, Texas. It features dramatic elevation changes, including a steep uphill climb to Turn 1, and sections inspired by historic European tracks.",
    history: "Opening in 2012, COTA hosted the first US Grand Prix since Indianapolis in 2007. Lewis Hamilton won the inaugural race for McLaren, and the track has become a staple of F1's popularity in America.",
    sectors: [
      {
        sector: 1,
        name: "Uphill Climb & S-Curves",
        description: "Starts with the steep 30m climb to Turn 1, followed by a high-speed S-curve sequence based on Silverstone's Becketts.",
        characteristics: ["Steep uphill blind hairpin", "High-speed changes of direction", "Aero stability"]
      },
      {
        sector: 2,
        name: "Back Straight & Hairpin",
        description: "Heavy braking at Turn 11 leading onto the 1km back straight and another overtaking zone at Turn 12.",
        characteristics: ["Extreme braking", "Long straight", "Overtaking zone"]
      },
      {
        sector: 3,
        name: "Stadium Section",
        description: "A slow-speed complex mirroring Hockenheim's Motodrom, concluding with the multi-apex right-hander.",
        characteristics: ["Off-camber corners", "Traction demand", "Long radius turn"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Charles Leclerc", team: "Ferrari", time: "1:34:16.890" },
      { year: 2024, driver: "Charles Leclerc", team: "Ferrari", time: "1:35:09.650" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:35:21.362" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Charles Leclerc", team: "Ferrari", lapTime: "1:36.169", year: 2019 },
      { category: "Qualifying Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:32.029", year: 2019 }
    ],
    cornerDetails: [
      { number: 1, name: "Big Red", type: "Blind Uphill Left", speed: 90 },
      { number: 4, name: "Becketts Replica", type: "High-Speed S-Curve", speed: 240 },
      { number: 12, name: "Back Straight Hairpin", type: "Tight Left", speed: 85 }
    ],
    gallery: [
      "/images/circuits/cota-gallery-1.jpg",
      "/images/circuits/cota-gallery-2.jpg",
      "/images/circuits/cota-gallery-3.jpg"
    ]
  },
  "mexico-city": {
    circuitId: "mexico-city",
    overview: "Sitting 2,240 meters above sea level, Autódromo Hermanos Rodríguez challenges engines and aerodynamics due to thin air. It features a spectacular stadium section inside an old baseball arena.",
    history: "Built in 1959, the track hosted F1 in the 1960s and 1980s. It returned to the calendar in 2015 with Nico Rosberg winning the first race of the modern era for Mercedes.",
    sectors: [
      {
        sector: 1,
        name: "Main Straight to Turn 3",
        description: "Begins with a 1.2km start-finish straight, presenting drafts and slipstreams into the Turn 1-2-3 chicane.",
        characteristics: ["Very long straight", "Traction braking", "Thin air drag reduction"]
      },
      {
        sector: 2,
        name: "Fast Esses",
        description: "A fast, flowing series of left-right turns that require absolute precision despite reduced downforce.",
        characteristics: ["Low grip", "Rapid transition", "Aero slip"]
      },
      {
        sector: 3,
        name: "Foro Sol Stadium",
        description: "The slow speed stadium section surrounded by grandstands holding over 30,000 fans, concluding with the Peraltada exit.",
        characteristics: ["Extremely slow corners", "Incredible atmosphere", "Traction exit"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "George Russell", team: "Mercedes", time: "1:39:56.291" },
      { year: 2024, driver: "Carlos Sainz", team: "Ferrari", time: "1:40:55.807" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:34:05.954" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:17.774", year: 2021 },
      { category: "Qualifying Lap Record", driver: "Daniel Ricciardo", team: "Red Bull Racing", lapTime: "1:14.759", year: 2018 }
    ],
    cornerDetails: [
      { number: 1, name: "Turn 1 Chicane", type: "Heavy Braking Right", speed: 105 },
      { number: 10, name: "Esses Mid-point", type: "Sweeping Left", speed: 190 },
      { number: 13, name: "Foro Sol Entry", type: "Slow Hairpin", speed: 65 }
    ],
    gallery: [
      "/images/circuits/mexico-gallery-1.jpg",
      "/images/circuits/mexico-gallery-2.jpg",
      "/images/circuits/mexico-gallery-3.jpg"
    ]
  },
  interlagos: {
    circuitId: "interlagos",
    overview: "Autódromo José Carlos Pace is a historic, anti-clockwise circuit featuring dramatic elevation changes and a passionate crowd. It has hosted many of the most dramatic championship deciders in F1 history.",
    history: "Opened in 1940, F1 racing began here in 1973 with Emerson Fittipaldi winning. It was renamed in honor of Brazilian driver José Carlos Pace and underwent a major shortening in 1990.",
    sectors: [
      {
        sector: 1,
        name: "Senna S & Curva do Sol",
        description: "Starts with the downhill Senna S chicane, immediately leading into the flat-out Curva do Sol.",
        characteristics: ["Downhill blind chicane", "Off-camber exit", "Traction downhill"]
      },
      {
        sector: 2,
        name: "Technical Infield",
        description: "Slow, twisty infield section including the off-camber Ferradura, Pinheirinho, and Bico de Pato.",
        characteristics: ["Severe elevation changes", "Technical hairpin", "Low-speed traction"]
      },
      {
        sector: 3,
        name: "Subida dos Boxes",
        description: "Features the final uphill left-hand sweep, where cars accelerate flat-out towards the start-finish line.",
        characteristics: ["Uphill sweep", "Full throttle acceleration", "Slipstream run"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing", time: "2:06:54.410" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "2:06:54.430" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:56:48.894" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:10.540", year: 2018 },
      { category: "Qualifying Lap Record", driver: "Lewis Hamilton", team: "Mercedes", lapTime: "1:07.281", year: 2018 }
    ],
    cornerDetails: [
      { number: 1, name: "Senna S", type: "Downhill Left-Right Chicane", speed: 105 },
      { number: 8, name: "Ferradura", type: "Double Right-Hander", speed: 190 },
      { number: 10, name: "Bico de Pato", type: "Tight Hairpin", speed: 80 }
    ],
    gallery: [
      "/images/circuits/interlagos-gallery-1.jpg",
      "/images/circuits/interlagos-gallery-2.jpg",
      "/images/circuits/interlagos-gallery-3.jpg"
    ]
  },
  "las-vegas": {
    circuitId: "las-vegas",
    overview: "The Las Vegas Strip Circuit is a high-speed street track passing legendary landmarks. The cold desert night temperatures pose a unique challenge for tire heating.",
    history: "Debuting in November 2023, this race was promoted directly by Formula One. Max Verstappen won the inaugural event following an action-packed race with Leclerc.",
    sectors: [
      {
        sector: 1,
        name: "Koval Lane Complex",
        description: "Starts at the pit straight, followed by the tight Turn 1-2 loop and the blast down Koval Lane.",
        characteristics: ["Cold asphalt", "Traction out of hairpin", "Wall-adjacent acceleration"]
      },
      {
        sector: 2,
        name: "Sphere to The Strip",
        description: "Winds around the MSG Sphere before entering the massive 1.9km flat-out straight down the Vegas Strip.",
        characteristics: ["Massive DRS straight", "Slipstream", "Extreme straight-line speeds"]
      },
      {
        sector: 3,
        name: "Braking & Final Turn",
        description: "Heavy braking at the end of the Strip straight, through chicane back to start-finish line.",
        characteristics: ["Extreme braking stability", "Low downforce setup", "Bumpy streets"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:28:44.291" },
      { year: 2024, driver: "George Russell", team: "Mercedes", time: "1:22:05.966" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:29:08.289" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Oscar Piastri", team: "McLaren", lapTime: "1:35.490", year: 2023 },
      { category: "Qualifying Lap Record", driver: "Charles Leclerc", team: "Ferrari", lapTime: "1:32.726", year: 2023 }
    ],
    cornerDetails: [
      { number: 1, name: "Harmon Corner", type: "Tight Left Loop", speed: 85 },
      { number: 14, name: "Strip Exit Chicane", type: "90-degree Left-Right", speed: 95 },
      { number: 17, name: "Final Corner Sweep", type: "Fast Left-Hander", speed: 220 }
    ],
    gallery: [
      "/images/circuits/lasvegas-gallery-1.jpg",
      "/images/circuits/lasvegas-gallery-2.jpg",
      "/images/circuits/lasvegas-gallery-3.jpg"
    ]
  },
  lusail: {
    circuitId: "lusail",
    overview: "Built in 2004, the Lusail International Circuit is a fast-flowing track with a main straight over 1 kilometer long. Under floodlights, its medium and high-speed corners challenge physical endurance.",
    history: "Originally built for MotoGP, Lusail hosted F1 in 2021 as a replacement race. Lewis Hamilton won the inaugural event. It returned on a 10-year contract starting in 2023.",
    sectors: [
      {
        sector: 1,
        name: "Opening Straight & Sweepers",
        description: "Heavy braking at Turn 1, followed by a fast-flowing series of turns leading into the central complex.",
        characteristics: ["Long DRS straight", "Braking stability", "High speed entry"]
      },
      {
        sector: 2,
        name: "Flowing Infield",
        description: "A relentless string of fast left-right combinations where drivers maintain high average speeds.",
        characteristics: ["Lateral loading", "Kerb clipping", "High wind and sand influence"]
      },
      {
        sector: 3,
        name: "Triple Right Sweeper",
        description: "Encompasses the challenging triple right-hander of Turns 12-13-14 before the final corner.",
        characteristics: ["Multi-apex corner", "Tire overheating", "Traction out"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:31.919" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:31.014" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:37.841" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:24.319", year: 2023 },
      { category: "Qualifying Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:23.778", year: 2023 }
    ],
    cornerDetails: [
      { number: 1, name: "Turn 1 Apex", type: "Medium Right-Hander", speed: 140 },
      { number: 10, name: "Club Corner", type: "Fast Right", speed: 200 },
      { number: 13, name: "Triple Apex Mid", type: "High-Speed Sweeper", speed: 215 }
    ],
    gallery: [
      "/images/circuits/lusail-gallery-1.jpg",
      "/images/circuits/lusail-gallery-2.jpg",
      "/images/circuits/lusail-gallery-3.jpg"
    ]
  },
  "yas-marina": {
    circuitId: "yas-marina",
    overview: "Yas Marina Circuit is F1's traditional season finale. Located on Yas Island, it features a marina backdrop, hotel canopy crossing, and a sunset-to-night transition.",
    history: "Hosting F1 since 2009, the track was re-profiled in 2021 to remove slow chicane sections, introducing a banked turn and increasing overall speeds.",
    sectors: [
      {
        sector: 1,
        name: "North Hairpin Approach",
        description: "Starts at pit straight, through the fast Turn 1-2-3 sweepers into the reprofiled Turn 5 hairpin.",
        characteristics: ["Medium speed sweeps", "Heavy braking hairpin", "DRS setup"]
      },
      {
        sector: 2,
        name: "Straights & Banked Turn 9",
        description: "Split by two long DRS straights, concluding at the banked Turn 9 hairpin sweeper.",
        characteristics: ["Engine power", "Drafting zones", "Banked corner traction"]
      },
      {
        sector: 3,
        name: "Hotel & Marina Marina",
        description: "Technical sector passing beneath the W Hotel and around the yacht marina.",
        characteristics: ["Off-camber corners", "Close barriers", "Rear tire overheating"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:02.624" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:02.624" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:02.624" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:26.103", year: 2021 },
      { category: "Qualifying Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:22.109", year: 2021 }
    ],
    cornerDetails: [
      { number: 5, name: "North Hairpin", type: "Tight Hairpin", speed: 85 },
      { number: 9, name: "Marsa Banking", type: "Banked Sweeper", speed: 175 },
      { number: 13, name: "Hotel Pass", type: "Off-Camber Left", speed: 90 }
    ],
    gallery: [
      "/images/circuits/yasmarina-gallery-1.jpg",
      "/images/circuits/yasmarina-gallery-2.jpg",
      "/images/circuits/yasmarina-gallery-3.jpg"
    ]
  },
  "red-bull-ring": {
    circuitId: "red-bull-ring",
    overview: "Set in the Styrian mountains, the Red Bull Ring is a short, fast circuit with steep elevation changes. Featuring only 10 corners, it produces close qualifying times and excellent racing.",
    history: "Originally opened as the Österreichring in 1969, it was shortened to the A1-Ring in 1996 and reopened in 2011 as the Red Bull Ring. It became a fan-favorite event.",
    sectors: [
      {
        sector: 1,
        name: "Uphill Climb to Turn 3",
        description: "Starts on the main straight, climbing steeply through Turn 1 into the uphill Turn 3 hairpin.",
        characteristics: ["Severe uphill climb", "Heavy braking", "Overtaking zone"]
      },
      {
        sector: 2,
        name: "Downhill Sweeps",
        description: "Descends down through Turn 4 before taking the fast Turn 6 and 7 left-handers.",
        characteristics: ["Off-camber braking", "Downhill sweepers", "Lateral G-forces"]
      },
      {
        sector: 3,
        name: "Rindt Curve to Line",
        description: "Fast right-hand turns at Turn 9 and 10 leading back to the pit straight.",
        characteristics: ["Track limits risk", "High-speed entries", "DRS drafting"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:05:41.221" },
      { year: 2024, driver: "George Russell", team: "Mercedes", time: "1:24:22.798" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:25:33.607" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Carlos Sainz", team: "McLaren", lapTime: "1:05.619", year: 2020 },
      { category: "Qualifying Lap Record", driver: "Valtteri Bottas", team: "Mercedes", lapTime: "1:02.939", year: 2020 }
    ],
    cornerDetails: [
      { number: 1, name: "Niki Lauda Kurve", type: "Uphill Right", speed: 140 },
      { number: 3, name: "Remus Kurve", type: "Tight Uphill Right", speed: 75 },
      { number: 9, name: "Rindt Kurve", type: "Downhill Right", speed: 205 }
    ],
    gallery: [
      "/images/circuits/redbullring-gallery-1.jpg",
      "/images/circuits/redbullring-gallery-2.jpg",
      "/images/circuits/redbullring-gallery-3.jpg"
    ]
  },
  catalunya: {
    circuitId: "catalunya",
    overview: "The Circuit de Barcelona-Catalunya is F1's benchmark testing track. It features a mixture of high, medium, and low-speed corners, testing aerodynamic efficiency and tire preservation.",
    history: "Opened in 1991 in time for the 1992 Barcelona Olympics, the circuit hosted Nigel Mansell's famous wheel-to-wheel straight battle with Ayrton Senna. The final chicane was removed in 2023.",
    sectors: [
      {
        sector: 1,
        name: "Elf Corner to Curva Grande",
        description: "Heavy braking at Turn 1 followed by Curva Grande uphill and the high-speed Turn 3 loop.",
        characteristics: ["Heavy braking chicane", "Long tire-torturing loop", "Wind sensitivity"]
      },
      {
        sector: 2,
        name: "Campsa Approach",
        description: "Technical infield turns leading into the fast right-hand blind crest at Campsa.",
        characteristics: ["Blind apex", "High-speed sweepers", "Understeer"]
      },
      {
        sector: 3,
        name: "Stadium Section",
        description: "Re-profiled final section with high-speed sweeps leading onto the main straight.",
        characteristics: ["Traction critical", "High speed exit", "DRS drafting"]
      }
    ],
    previousWinners: [
      { year: 2025, driver: "Lando Norris", team: "McLaren", time: "1:28:16.310" },
      { year: 2024, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:28:20.227" },
      { year: 2023, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:27:57.940" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Max Verstappen", team: "Red Bull Racing", lapTime: "1:16.330", year: 2023 },
      { category: "Qualifying Lap Record", driver: "Lando Norris", team: "McLaren", lapTime: "1:11.383", year: 2024 }
    ],
    cornerDetails: [
      { number: 1, name: "Elf Corner", type: "Chicane Right-Left", speed: 135 },
      { number: 3, name: "Curva Renault", type: "Long Sweeping Right", speed: 230 },
      { number: 9, name: "Campsa", type: "Blind Right-Hander", speed: 215 }
    ],
    gallery: [
      "/images/circuits/barcelona-gallery-1.jpg",
      "/images/circuits/barcelona-gallery-2.jpg",
      "/images/circuits/barcelona-gallery-3.jpg"
    ]
  },
  hockenheim: {
    circuitId: "hockenheim",
    overview: "Rebuilt from the historic high-speed forest layout into a modern GP track, the Hockenheimring combines high-speed straights with the tight, stadium-like Motodrom section.",
    history: "First built in 1932, Hockenheim featured ultra-long forest straights before being re-designed in 2002 by Tilke. It has hosted many legendary German Grand Prix events.",
    sectors: [
      {
        sector: 1,
        name: "Nordkurve & Forest Blast",
        description: "High speed Turn 1 leading out to the sweepers towards the forest straight.",
        characteristics: ["High speed entrance", "Traction out", "Flat-out blast"]
      },
      {
        sector: 2,
        name: "Parabolica & Hairpin",
        description: "The long curved Parabolica straight leading to the heavy braking hairpin overtaking zone.",
        characteristics: ["Slipstream", "Extreme braking", "Hairpin traction"]
      },
      {
        sector: 3,
        name: "Motodrom Stadium",
        description: "Winds through the tight, amphitheater stadium section with off-camber corners.",
        characteristics: ["Close barriers", "Technical infield", "Fan atmosphere"]
      }
    ],
    previousWinners: [
      { year: 2019, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:44:31.275" },
      { year: 2018, driver: "Lewis Hamilton", team: "Mercedes", time: "1:32:11.640" },
      { year: 2016, driver: "Lewis Hamilton", team: "Mercedes", time: "1:30:44.200" }
    ],
    trackRecords: [
      { category: "Race Lap Record", driver: "Kimi Räikkönen", team: "McLaren", lapTime: "1:13.780", year: 2004 },
      { category: "Qualifying Lap Record", driver: "Sebastian Vettel", team: "Ferrari", lapTime: "1:11.212", year: 2018 }
    ],
    cornerDetails: [
      { number: 1, name: "Nordkurve", type: "Fast Right-Hander", speed: 195 },
      { number: 6, name: "Spitzkehre", type: "Tight Hairpin", speed: 70 },
      { number: 12, name: "Sachskurve", type: "Stadium Left Hairpin", speed: 85 }
    ],
    gallery: [
      "/images/circuits/hockenheim-gallery-1.jpg",
      "/images/circuits/hockenheim-gallery-2.jpg",
      "/images/circuits/hockenheim-gallery-3.jpg"
    ]
  }
};
