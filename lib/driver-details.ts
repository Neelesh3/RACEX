import type { DriverDetails } from "@/types/driver-details";

export const driverDetails: Record<string, DriverDetails> = {
  "max-verstappen": {
    driverId: "max-verstappen",
    bio:
      "Max Verstappen is widely regarded as one of Formula One's greatest modern drivers. Renowned for his fearless overtaking, exceptional race pace, and relentless consistency, he has become the benchmark for performance in the current generation of Formula One.",
    careerSummary:
      "Verstappen made his Formula One debut in 2015 at just 17 years old, becoming the youngest driver in Formula One history. After earning promotion to Red Bull Racing in 2016, he immediately won his first Grand Prix and rapidly established himself as a championship contender. Through multiple title-winning campaigns, he has rewritten numerous Formula One records while becoming one of the sport's most dominant competitors.",
    birthDate: "1997-09-30",
    birthPlace: "Hasselt, Belgium",
    height: "181 cm",
    weight: "72 kg",
    debutSeason: 2015,
    worldChampionships: 4,
    careerWins: 65,
    careerPodiums: 118,
    careerPoles: 43,
    fastestLaps: 34,
    helmetImage: "/images/drivers/helmets/max-verstappen.png",
    gallery: [
      "/images/drivers/max-verstappen/1.jpg",
      "/images/drivers/max-verstappen/2.jpg",
      "/images/drivers/max-verstappen/3.jpg",
      "/images/drivers/max-verstappen/4.jpg",
    ],
    socialLinks: {
      website: "https://www.maxverstappen.com",
      instagram: "https://instagram.com/maxverstappen1",
      x: "https://x.com/Max33Verstappen",
    },
    careerTimeline: [
      {
        year: 2015,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut with Scuderia Toro Rosso as the youngest driver in Formula One history.",
      },
      {
        year: 2016,
        title: "First Grand Prix Victory",
        description:
          "Won the Spanish Grand Prix on his Red Bull Racing debut, becoming the youngest race winner in Formula One history.",
      },
      {
        year: 2021,
        title: "First World Championship",
        description:
          "Captured his maiden Drivers' World Championship after an unforgettable title battle.",
      },
      {
        year: 2022,
        title: "Dominant Championship",
        description:
          "Produced one of the most dominant championship-winning seasons in Formula One history.",
      },
      {
        year: 2023,
        title: "Record-Breaking Season",
        description:
          "Set multiple Formula One records including the most victories in a single season.",
      },
      {
        year: 2024,
        title: "Multiple World Champion",
        description:
          "Added another Drivers' World Championship while continuing Red Bull Racing's success.",
      },
    ],
    statistics: {
      races: 220,
      points: 3200,
      podiumRate: "53.6%",
      winRate: "29.5%",
      poleRate: "19.5%",
      averageFinish: 3.2,
    },
  },
    "lando-norris": {
    driverId: "lando-norris",
    bio:
      "Lando Norris has established himself as one of Formula One's brightest stars through exceptional qualifying performances, race pace, and consistency. His combination of speed, intelligence, and calm decision-making has made him a regular contender at the front of the grid.",
    careerSummary:
      "After joining McLaren in 2019, Norris quickly developed into one of Formula One's leading drivers. Consistent podium finishes, impressive qualifying performances, and breakthrough Grand Prix victories transformed him from an exciting young talent into a genuine championship contender.",
    birthDate: "1999-11-13",
    birthPlace: "Bristol, England",
    height: "170 cm",
    weight: "68 kg",
    debutSeason: 2019,
    worldChampionships: 0,
    careerWins: 8,
    careerPodiums: 35,
    careerPoles: 10,
    fastestLaps: 13,
    helmetImage: "/images/drivers/helmets/lando-norris.png",
    gallery: [
      "/images/drivers/lando-norris/1.jpg",
      "/images/drivers/lando-norris/2.jpg",
      "/images/drivers/lando-norris/3.jpg",
      "/images/drivers/lando-norris/4.jpg",
    ],
    socialLinks: {
      website: "https://landonorris.com",
      instagram: "https://instagram.com/landonorris",
      x: "https://x.com/LandoNorris",
    },
    careerTimeline: [
      {
        year: 2019,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut with McLaren after an impressive junior career.",
      },
      {
        year: 2020,
        title: "First Podium",
        description:
          "Scored his maiden Formula One podium and established himself as one of the sport's rising stars.",
      },
      {
        year: 2021,
        title: "First Pole Position",
        description:
          "Claimed his first Formula One pole position with an outstanding qualifying performance.",
      },
      {
        year: 2024,
        title: "First Grand Prix Victory",
        description:
          "Achieved his long-awaited first Formula One victory and became a consistent race winner.",
      },
      {
        year: 2025,
        title: "Championship Contender",
        description:
          "Regularly challenged for victories while fighting near the top of the Drivers' Championship.",
      },
    ],
    statistics: {
      races: 140,
      points: 1150,
      podiumRate: "25.0%",
      winRate: "5.7%",
      poleRate: "7.1%",
      averageFinish: 7.1,
    },
  },
    "charles-leclerc": {
    driverId: "charles-leclerc",
    bio:
      "Charles Leclerc is Ferrari's leading driver and one of Formula One's fastest qualifiers. Known for his precision, determination, and ability to extract maximum performance from the car, he has become a fan favorite and a consistent front-runner.",
    careerSummary:
      "After winning the Formula 2 Championship, Leclerc debuted in Formula One with Sauber before earning a Ferrari seat in 2019. Since then, he has secured multiple victories, pole positions, and podium finishes while becoming the cornerstone of Ferrari's long-term future.",
    birthDate: "1997-10-16",
    birthPlace: "Monte Carlo, Monaco",
    height: "180 cm",
    weight: "69 kg",
    debutSeason: 2018,
    worldChampionships: 0,
    careerWins: 8,
    careerPodiums: 43,
    careerPoles: 26,
    fastestLaps: 11,
    helmetImage: "/images/drivers/helmets/charles-leclerc.png",
    gallery: [
      "/images/drivers/charles-leclerc/1.jpg",
      "/images/drivers/charles-leclerc/2.jpg",
      "/images/drivers/charles-leclerc/3.jpg",
      "/images/drivers/charles-leclerc/4.jpg",
    ],
    socialLinks: {
      website: "https://www.charlesleclerc.com",
      instagram: "https://instagram.com/charles_leclerc",
      x: "https://x.com/Charles_Leclerc",
    },
    careerTimeline: [
      {
        year: 2018,
        title: "Formula One Debut",
        description:
          "Joined Alfa Romeo Sauber after winning the Formula 2 Championship.",
      },
      {
        year: 2019,
        title: "Promotion to Ferrari",
        description:
          "Became a Ferrari race driver and secured his maiden Formula One victory.",
      },
      {
        year: 2019,
        title: "Monza Victory",
        description:
          "Won the Italian Grand Prix in front of Ferrari's passionate home crowd.",
      },
      {
        year: 2022,
        title: "Championship Challenge",
        description:
          "Led the championship during the opening phase of the season with multiple victories.",
      },
      {
        year: 2025,
        title: "Ferrari Team Leader",
        description:
          "Continued leading Ferrari's pursuit of championship success with consistent podium finishes.",
      },
    ],
    statistics: {
      races: 150,
      points: 1450,
      podiumRate: "28.7%",
      winRate: "5.3%",
      poleRate: "17.3%",
      averageFinish: 6.4,
    },
  },

  "oscar-piastri": {
    driverId: "oscar-piastri",
    bio:
      "Oscar Piastri has rapidly emerged as one of Formula One's brightest young stars. His calm approach, exceptional racecraft, and technical understanding have made him one of the most complete talents of the new generation.",
    careerSummary:
      "After winning the Formula Renault Eurocup, Formula 3, and Formula 2 championships in consecutive seasons, Piastri entered Formula One with McLaren in 2023. Within a short period, he established himself as a Grand Prix winner and championship contender through impressive consistency and maturity.",
    birthDate: "2001-04-06",
    birthPlace: "Melbourne, Australia",
    height: "178 cm",
    weight: "68 kg",
    debutSeason: 2023,
    worldChampionships: 0,
    careerWins: 8,
    careerPodiums: 22,
    careerPoles: 6,
    fastestLaps: 8,
    helmetImage: "/images/drivers/helmets/oscar-piastri.png",
    gallery: [
      "/images/drivers/oscar-piastri/1.jpg",
      "/images/drivers/oscar-piastri/2.jpg",
      "/images/drivers/oscar-piastri/3.jpg",
      "/images/drivers/oscar-piastri/4.jpg",
    ],
    socialLinks: {
      website: "https://www.oscarpiastri.com",
      instagram: "https://instagram.com/oscarpiastri",
      x: "https://x.com/OscarPiastri",
    },
    careerTimeline: [
      {
        year: 2019,
        title: "Formula Renault Eurocup Champion",
        description:
          "Captured the Formula Renault Eurocup title after an outstanding season.",
      },
      {
        year: 2020,
        title: "Formula 3 Champion",
        description:
          "Won the FIA Formula 3 Championship during his rookie campaign.",
      },
      {
        year: 2021,
        title: "Formula 2 Champion",
        description:
          "Claimed the FIA Formula 2 Championship in dominant fashion.",
      },
      {
        year: 2023,
        title: "Formula One Debut",
        description:
          "Joined McLaren and immediately impressed with consistent performances.",
      },
      {
        year: 2023,
        title: "Sprint Race Winner",
        description:
          "Secured his first Formula One Sprint victory during his rookie season.",
      },
      {
        year: 2024,
        title: "First Grand Prix Victory",
        description:
          "Earned his maiden Formula One Grand Prix victory and became a regular podium contender.",
      },
      {
        year: 2025,
        title: "Championship Challenger",
        description:
          "Developed into one of the leading contenders for the Drivers' Championship.",
      },
    ],
    statistics: {
      races: 55,
      points: 620,
      podiumRate: "40.0%",
      winRate: "14.5%",
      poleRate: "10.9%",
      averageFinish: 5.4,
    },
  },
    "lewis-hamilton": {
    driverId: "lewis-hamilton",
    bio:
      "Lewis Hamilton is one of the greatest drivers in Formula One history. His remarkable consistency, racecraft, qualifying pace, and longevity have established him among the sport's all-time legends while inspiring millions around the world.",
    careerSummary:
      "Hamilton debuted in Formula One with McLaren in 2007 before moving to Mercedes in 2013, where he enjoyed one of the most dominant periods in Formula One history. Multiple World Championships, over one hundred Grand Prix victories, and countless records have cemented his legacy as one of the greatest racing drivers ever.",
    birthDate: "1985-01-07",
    birthPlace: "Stevenage, England",
    height: "174 cm",
    weight: "73 kg",
    debutSeason: 2007,
    worldChampionships: 7,
    careerWins: 105,
    careerPodiums: 202,
    careerPoles: 104,
    fastestLaps: 68,
    helmetImage: "/images/drivers/helmets/lewis-hamilton.png",
    gallery: [
      "/images/drivers/lewis-hamilton/1.jpg",
      "/images/drivers/lewis-hamilton/2.jpg",
      "/images/drivers/lewis-hamilton/3.jpg",
      "/images/drivers/lewis-hamilton/4.jpg",
    ],
    socialLinks: {
      website: "https://www.lewishamilton.com",
      instagram: "https://instagram.com/lewishamilton",
      x: "https://x.com/LewisHamilton",
    },
    careerTimeline: [
      {
        year: 2007,
        title: "Formula One Debut",
        description:
          "Made an extraordinary rookie debut with McLaren, narrowly missing the World Championship.",
      },
      {
        year: 2008,
        title: "First World Championship",
        description:
          "Won his maiden Formula One Drivers' Championship in dramatic fashion.",
      },
      {
        year: 2013,
        title: "Joined Mercedes",
        description:
          "Moved to Mercedes, beginning one of the most successful partnerships in Formula One history.",
      },
      {
        year: 2014,
        title: "Second World Championship",
        description:
          "Led Mercedes to the beginning of the hybrid-era dominance.",
      },
      {
        year: 2020,
        title: "Seven-Time World Champion",
        description:
          "Equalled the all-time Drivers' Championship record with his seventh world title.",
      },
      {
        year: 2025,
        title: "Ferrari Move",
        description:
          "Started a new chapter of his Formula One career by joining Ferrari.",
      },
    ],
    statistics: {
      races: 370,
      points: 4950,
      podiumRate: "54.6%",
      winRate: "28.4%",
      poleRate: "28.1%",
      averageFinish: 3.8,
    },
  },
    "george-russell": {
    driverId: "george-russell",
    bio:
      "George Russell has established himself as one of Formula One's most technically complete drivers. Known for his precision, consistency, and exceptional qualifying pace, he has become a key figure in Mercedes' long-term future.",
    careerSummary:
      "After dominating the junior categories, Russell joined Williams in 2019 before earning promotion to Mercedes. Strong race performances, consistent podium finishes, and multiple Grand Prix victories have confirmed his place among Formula One's elite drivers.",
    birthDate: "1998-02-15",
    birthPlace: "King's Lynn, England",
    height: "185 cm",
    weight: "70 kg",
    debutSeason: 2019,
    worldChampionships: 0,
    careerWins: 3,
    careerPodiums: 18,
    careerPoles: 6,
    fastestLaps: 7,
    helmetImage: "/images/drivers/helmets/george-russell.png",
    gallery: [
      "/images/drivers/george-russell/1.jpg",
      "/images/drivers/george-russell/2.jpg",
      "/images/drivers/george-russell/3.jpg",
      "/images/drivers/george-russell/4.jpg",
    ],
    socialLinks: {
      website: "https://www.georgerussell63.com",
      instagram: "https://instagram.com/georgerussell63",
      x: "https://x.com/GeorgeRussell63",
    },
    careerTimeline: [
      {
        year: 2019,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut with Williams after winning the Formula 2 Championship.",
      },
      {
        year: 2020,
        title: "Mercedes Stand-In",
        description:
          "Delivered an outstanding performance while substituting for Mercedes at the Sakhir Grand Prix.",
      },
      {
        year: 2022,
        title: "First Grand Prix Victory",
        description:
          "Claimed his maiden Formula One victory at the São Paulo Grand Prix.",
      },
      {
        year: 2023,
        title: "Mercedes Team Leader",
        description:
          "Continued developing into one of Mercedes' leading championship contenders.",
      },
      {
        year: 2025,
        title: "Multiple Race Winner",
        description:
          "Added further victories while consistently fighting near the front of the grid.",
      },
    ],
    statistics: {
      races: 135,
      points: 920,
      podiumRate: "13.3%",
      winRate: "2.2%",
      poleRate: "4.4%",
      averageFinish: 8.1,
    },
  },
    "fernando-alonso": {
    driverId: "fernando-alonso",
    bio:
      "Fernando Alonso is regarded as one of Formula One's greatest all-round drivers. His racecraft, tire management, technical feedback, and relentless determination have made him one of the sport's most respected competitors across multiple generations.",
    careerSummary:
      "Making his Formula One debut in 2001, Alonso became the youngest double World Champion after consecutive titles with Renault. Throughout an extraordinary career spanning more than two decades, he has driven for several iconic teams while remaining one of the fastest and most complete drivers on the grid.",
    birthDate: "1981-07-29",
    birthPlace: "Oviedo, Spain",
    height: "171 cm",
    weight: "68 kg",
    debutSeason: 2001,
    worldChampionships: 2,
    careerWins: 32,
    careerPodiums: 106,
    careerPoles: 22,
    fastestLaps: 26,
    helmetImage: "/images/drivers/helmets/fernando-alonso.png",
    gallery: [
      "/images/drivers/fernando-alonso/1.jpg",
      "/images/drivers/fernando-alonso/2.jpg",
      "/images/drivers/fernando-alonso/3.jpg",
      "/images/drivers/fernando-alonso/4.jpg",
    ],
    socialLinks: {
      website: "https://www.fernandoalonso.com",
      instagram: "https://instagram.com/fernandoalo_oficial",
      x: "https://x.com/alo_oficial",
    },
    careerTimeline: [
      {
        year: 2001,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut with Minardi at just nineteen years of age.",
      },
      {
        year: 2005,
        title: "First World Championship",
        description:
          "Won the Drivers' Championship with Renault, ending Ferrari's dominant era.",
      },
      {
        year: 2006,
        title: "Second World Championship",
        description:
          "Successfully defended his Formula One World Championship title.",
      },
      {
        year: 2018,
        title: "Temporary Departure",
        description:
          "Stepped away from Formula One to pursue success in endurance racing and other motorsport categories.",
      },
      {
        year: 2021,
        title: "Formula One Return",
        description:
          "Returned to Formula One with Alpine before later joining Aston Martin.",
      },
      {
        year: 2023,
        title: "Aston Martin Revival",
        description:
          "Became a regular podium contender once again with Aston Martin.",
      },
    ],
    statistics: {
      races: 410,
      points: 2350,
      podiumRate: "25.9%",
      winRate: "7.8%",
      poleRate: "5.4%",
      averageFinish: 6.1,
    },
  },
    "carlos-sainz": {
    driverId: "carlos-sainz",
    bio:
      "Carlos Sainz is recognized as one of Formula One's most intelligent and adaptable drivers. His smooth driving style, technical understanding, and consistency have earned him respect throughout the paddock.",
    careerSummary:
      "After making his Formula One debut with Toro Rosso in 2015, Sainz progressed through Renault, McLaren, Ferrari, and later Williams. His career has been defined by steady improvement, multiple Grand Prix victories, and strong leadership within every team he has represented.",
    birthDate: "1994-09-01",
    birthPlace: "Madrid, Spain",
    height: "178 cm",
    weight: "66 kg",
    debutSeason: 2015,
    worldChampionships: 0,
    careerWins: 4,
    careerPodiums: 28,
    careerPoles: 6,
    fastestLaps: 5,
    helmetImage: "/images/drivers/helmets/carlos-sainz.png",
    gallery: [
      "/images/drivers/carlos-sainz/1.jpg",
      "/images/drivers/carlos-sainz/2.jpg",
      "/images/drivers/carlos-sainz/3.jpg",
      "/images/drivers/carlos-sainz/4.jpg",
    ],
    socialLinks: {
      website: "https://www.carlossainz.es",
      instagram: "https://instagram.com/carlossainz55",
      x: "https://x.com/Carlossainz55",
    },
    careerTimeline: [
      {
        year: 2015,
        title: "Formula One Debut",
        description:
          "Entered Formula One with Toro Rosso alongside fellow Red Bull Junior drivers.",
      },
      {
        year: 2019,
        title: "First Podium",
        description:
          "Claimed his maiden Formula One podium after an impressive season with McLaren.",
      },
      {
        year: 2021,
        title: "Joined Ferrari",
        description:
          "Began racing for Scuderia Ferrari and immediately became a regular podium finisher.",
      },
      {
        year: 2022,
        title: "First Grand Prix Victory",
        description:
          "Won the British Grand Prix to secure his maiden Formula One victory.",
      },
      {
        year: 2025,
        title: "Williams Challenge",
        description:
          "Joined Williams to help lead the team's long-term return to the front of the grid.",
      },
    ],
    statistics: {
      races: 220,
      points: 1320,
      podiumRate: "12.7%",
      winRate: "1.8%",
      poleRate: "2.7%",
      averageFinish: 8.0,
    },
  },
    "kimi-antonelli": {
    driverId: "kimi-antonelli",
    bio:
      "Andrea Kimi Antonelli is regarded as one of the brightest prospects in modern motorsport. His exceptional speed, maturity, and adaptability have made him one of Formula One's most exciting young talents.",
    careerSummary:
      "After dominating multiple junior championships as part of the Mercedes Junior Team, Antonelli graduated to Formula One and quickly demonstrated the pace and composure expected of a future championship contender.",
    birthDate: "2006-08-25",
    birthPlace: "Bologna, Italy",
    height: "172 cm",
    weight: "67 kg",
    debutSeason: 2025,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 2,
    careerPoles: 1,
    fastestLaps: 1,
    helmetImage: "/images/drivers/helmets/kimi-antonelli.png",
    gallery: [
      "/images/drivers/kimi-antonelli/1.jpg",
      "/images/drivers/kimi-antonelli/2.jpg",
      "/images/drivers/kimi-antonelli/3.jpg",
      "/images/drivers/kimi-antonelli/4.jpg",
    ],
    socialLinks: {
      instagram: "https://instagram.com/kimi.antonelli",
      x: "https://x.com/KimiAntonelli",
    },
    careerTimeline: [
      {
        year: 2022,
        title: "Formula Regional Champion",
        description:
          "Captured the Formula Regional European Championship with dominant performances.",
      },
      {
        year: 2023,
        title: "Mercedes Junior Success",
        description:
          "Continued rapid development as one of Mercedes' highest-rated young drivers.",
      },
      {
        year: 2024,
        title: "Formula 2 Campaign",
        description:
          "Impressed throughout Formula 2 with race victories and podium finishes.",
      },
      {
        year: 2025,
        title: "Formula One Debut",
        description:
          "Joined Mercedes and immediately showcased his speed and maturity against experienced competitors.",
      },
    ],
    statistics: {
      races: 22,
      points: 96,
      podiumRate: "9.1%",
      winRate: "0.0%",
      poleRate: "4.5%",
      averageFinish: 9.8,
    },
  },
    "alexander-albon": {
    driverId: "alexander-albon",
    bio:
      "Alexander Albon is known for his smooth driving style, excellent tire management, and ability to consistently maximize race results. His calm approach and determination have made him a respected competitor throughout the Formula One paddock.",
    careerSummary:
      "After debuting with Toro Rosso in 2019, Albon quickly earned promotion to Red Bull Racing before later rebuilding his career with Williams. Since returning to Formula One, he has become the team's leader and has regularly delivered impressive performances beyond the car's expected potential.",
    birthDate: "1996-03-23",
    birthPlace: "London, United Kingdom",
    height: "186 cm",
    weight: "74 kg",
    debutSeason: 2019,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 2,
    careerPoles: 0,
    fastestLaps: 1,
    helmetImage: "/images/drivers/helmets/alexander-albon.png",
    gallery: [
      "/images/drivers/alexander-albon/1.jpg",
      "/images/drivers/alexander-albon/2.jpg",
      "/images/drivers/alexander-albon/3.jpg",
      "/images/drivers/alexander-albon/4.jpg",
    ],
    socialLinks: {
      website: "https://www.alexalbon.com",
      instagram: "https://instagram.com/alex_albon",
      x: "https://x.com/alex_albon",
    },
    careerTimeline: [
      {
        year: 2019,
        title: "Formula One Debut",
        description:
          "Entered Formula One with Toro Rosso after competing in Formula 2.",
      },
      {
        year: 2019,
        title: "Promotion to Red Bull Racing",
        description:
          "Mid-season promotion rewarded his impressive rookie performances.",
      },
      {
        year: 2020,
        title: "First Formula One Podium",
        description:
          "Achieved his maiden podium finish while racing for Red Bull Racing.",
      },
      {
        year: 2022,
        title: "Williams Return",
        description:
          "Returned to Formula One with Williams and immediately became the team's leading points scorer.",
      },
      {
        year: 2025,
        title: "Team Leader",
        description:
          "Continued leading Williams' long-term development with consistently strong performances.",
      },
    ],
    statistics: {
      races: 115,
      points: 305,
      podiumRate: "1.7%",
      winRate: "0.0%",
      poleRate: "0.0%",
      averageFinish: 10.3,
    },
  },
    "pierre-gasly": {
    driverId: "pierre-gasly",
    bio:
      "Pierre Gasly is recognized for his resilience, technical feedback, and ability to deliver standout performances under pressure. His determination has made him one of Formula One's most respected competitors.",
    careerSummary:
      "Gasly progressed through the Red Bull Junior Programme before making his Formula One debut in 2017. Following spells with Toro Rosso, Red Bull Racing, AlphaTauri, and Alpine, he established himself as a Grand Prix winner and a consistent midfield leader.",
    birthDate: "1996-02-07",
    birthPlace: "Rouen, France",
    height: "177 cm",
    weight: "70 kg",
    debutSeason: 2017,
    worldChampionships: 0,
    careerWins: 1,
    careerPodiums: 5,
    careerPoles: 0,
    fastestLaps: 3,
    helmetImage: "/images/drivers/helmets/pierre-gasly.png",
    gallery: [
      "/images/drivers/pierre-gasly/1.jpg",
      "/images/drivers/pierre-gasly/2.jpg",
      "/images/drivers/pierre-gasly/3.jpg",
      "/images/drivers/pierre-gasly/4.jpg",
    ],
    socialLinks: {
      website: "https://www.pierregasly.com",
      instagram: "https://instagram.com/pierregasly",
      x: "https://x.com/PierreGASLY",
    },
    careerTimeline: [
      {
        year: 2017,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut with Toro Rosso during the 2017 season.",
      },
      {
        year: 2019,
        title: "Red Bull Promotion",
        description:
          "Earned promotion to Red Bull Racing before returning to Toro Rosso later that year.",
      },
      {
        year: 2020,
        title: "Italian Grand Prix Victory",
        description:
          "Claimed an emotional maiden Formula One victory at Monza with AlphaTauri.",
      },
      {
        year: 2023,
        title: "Joined Alpine",
        description:
          "Began a new chapter with Alpine, bringing experience and race-winning pedigree.",
      },
      {
        year: 2025,
        title: "Alpine Leader",
        description:
          "Continued leading Alpine's midfield fight through consistent points finishes.",
      },
    ],
    statistics: {
      races: 165,
      points: 470,
      podiumRate: "3.0%",
      winRate: "0.6%",
      poleRate: "0.0%",
      averageFinish: 10.4,
    },
  },
    "esteban-ocon": {
    driverId: "esteban-ocon",
    bio:
      "Esteban Ocon is known for his determination, consistency, and impressive racecraft. His ability to maximize opportunities and perform under pressure has earned him victories and respect throughout the Formula One paddock.",
    careerSummary:
      "Ocon entered Formula One in 2016 after winning multiple junior championships. Following spells with Manor, Force India, Racing Point, Alpine, and Haas, he has established himself as a dependable points scorer and Formula One Grand Prix winner.",
    birthDate: "1996-09-17",
    birthPlace: "Évreux, France",
    height: "186 cm",
    weight: "66 kg",
    debutSeason: 2016,
    worldChampionships: 0,
    careerWins: 1,
    careerPodiums: 4,
    careerPoles: 0,
    fastestLaps: 1,
    helmetImage: "/images/drivers/helmets/esteban-ocon.png",
    gallery: [
      "/images/drivers/esteban-ocon/1.jpg",
      "/images/drivers/esteban-ocon/2.jpg",
      "/images/drivers/esteban-ocon/3.jpg",
      "/images/drivers/esteban-ocon/4.jpg",
    ],
    socialLinks: {
      website: "https://www.esteban-ocon.com",
      instagram: "https://instagram.com/estebanocon",
      x: "https://x.com/OconEsteban",
    },
    careerTimeline: [
      {
        year: 2016,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut with Manor Racing during the 2016 season.",
      },
      {
        year: 2017,
        title: "Force India Success",
        description:
          "Established himself as one of the grid's most consistent young midfield drivers.",
      },
      {
        year: 2020,
        title: "Return to Formula One",
        description:
          "Returned to full-time racing with Renault after a season serving as Mercedes reserve driver.",
      },
      {
        year: 2021,
        title: "Hungarian Grand Prix Victory",
        description:
          "Secured his maiden Formula One victory after a composed drive at the Hungaroring.",
      },
      {
        year: 2023,
        title: "Regular Podium Finisher",
        description:
          "Helped Alpine secure valuable championship points with several strong performances.",
      },
      {
        year: 2025,
        title: "Joined Haas",
        description:
          "Began a new chapter by bringing experience and leadership to the Haas Formula One Team.",
      },
    ],
    statistics: {
      races: 165,
      points: 470,
      podiumRate: "2.4%",
      winRate: "0.6%",
      poleRate: "0.0%",
      averageFinish: 10.1,
    },
  },
    "nico-hulkenberg": {
    driverId: "nico-hulkenberg",
    bio:
      "Nico Hülkenberg is one of Formula One's most experienced drivers, respected for his outstanding qualifying pace, technical knowledge, and consistency. Throughout his career he has earned a reputation as one of the strongest all-round competitors on the grid.",
    careerSummary:
      "Following championship-winning success in GP2, Hülkenberg debuted in Formula One in 2010. Across spells with Williams, Force India, Sauber, Renault, Racing Point, Haas, and Kick Sauber, he has consistently delivered strong performances while becoming one of the sport's most experienced drivers.",
    birthDate: "1987-08-19",
    birthPlace: "Emmerich am Rhein, Germany",
    height: "184 cm",
    weight: "74 kg",
    debutSeason: 2010,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 0,
    careerPoles: 1,
    fastestLaps: 2,
    helmetImage: "/images/drivers/helmets/nico-hulkenberg.png",
    gallery: [
      "/images/drivers/nico-hulkenberg/1.jpg",
      "/images/drivers/nico-hulkenberg/2.jpg",
      "/images/drivers/nico-hulkenberg/3.jpg",
      "/images/drivers/nico-hulkenberg/4.jpg",
    ],
    socialLinks: {
      website: "https://www.nicohulkenberg.net",
      instagram: "https://instagram.com/hulkhulkenberg",
      x: "https://x.com/HulkHulkenberg",
    },
    careerTimeline: [
      {
        year: 2009,
        title: "GP2 Champion",
        description:
          "Won the GP2 Series Championship before graduating to Formula One.",
      },
      {
        year: 2010,
        title: "Formula One Debut",
        description:
          "Joined Williams and became one of Formula One's most promising newcomers.",
      },
      {
        year: 2010,
        title: "First Pole Position",
        description:
          "Secured a sensational pole position at the Brazilian Grand Prix.",
      },
      {
        year: 2023,
        title: "Return with Haas",
        description:
          "Returned to Formula One full-time and consistently scored valuable championship points.",
      },
      {
        year: 2025,
        title: "Kick Sauber",
        description:
          "Joined Kick Sauber to provide experience ahead of the team's future Audi era.",
      },
    ],
    statistics: {
      races: 245,
      points: 610,
      podiumRate: "0.0%",
      winRate: "0.0%",
      poleRate: "0.4%",
      averageFinish: 10.2,
    },
  },
    "gabriel-bortoleto": {
    driverId: "gabriel-bortoleto",
    bio:
      "Gabriel Bortoleto is one of Brazil's most exciting young racing talents. Calm under pressure and technically gifted, he has quickly progressed through the junior categories to earn a place on the Formula One grid.",
    careerSummary:
      "After winning both the FIA Formula 3 and Formula 2 championships, Bortoleto graduated to Formula One with Kick Sauber. His mature driving style, race management, and qualifying pace have established him as one of the most promising rookies in the championship.",
    birthDate: "2004-10-14",
    birthPlace: "São Paulo, Brazil",
    height: "184 cm",
    weight: "71 kg",
    debutSeason: 2025,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 1,
    careerPoles: 0,
    fastestLaps: 0,
    helmetImage: "/images/drivers/helmets/gabriel-bortoleto.png",
    gallery: [
      "/images/drivers/gabriel-bortoleto/1.jpg",
      "/images/drivers/gabriel-bortoleto/2.jpg",
      "/images/drivers/gabriel-bortoleto/3.jpg",
      "/images/drivers/gabriel-bortoleto/4.jpg",
    ],
    socialLinks: {
      instagram: "https://instagram.com/gabrielbortoleto",
      x: "https://x.com/G_Bortoleto",
    },
    careerTimeline: [
      {
        year: 2023,
        title: "Formula 3 Champion",
        description:
          "Won the FIA Formula 3 Championship during his rookie season.",
      },
      {
        year: 2024,
        title: "Formula 2 Champion",
        description:
          "Captured the FIA Formula 2 title and secured promotion to Formula One.",
      },
      {
        year: 2025,
        title: "Formula One Debut",
        description:
          "Joined Kick Sauber and began his Formula One career as one of the grid's most highly rated rookies.",
      },
    ],
    statistics: {
      races: 22,
      points: 38,
      podiumRate: "4.5%",
      winRate: "0.0%",
      poleRate: "0.0%",
      averageFinish: 11.1,
    },
  },
    "yuki-tsunoda": {
    driverId: "yuki-tsunoda",
    bio:
      "Yuki Tsunoda has become one of Formula One's most exciting drivers thanks to his fearless racing style, rapid reactions, and impressive speed. Since arriving in Formula One, he has matured into a dependable points scorer while maintaining his aggressive approach on track.",
    careerSummary:
      "After progressing through Honda's junior programme, Tsunoda earned promotion to Formula One with AlphaTauri in 2021. Continuous improvement in qualifying pace, race management, and consistency has transformed him into one of the grid's strongest midfield competitors.",
    birthDate: "2000-05-11",
    birthPlace: "Sagamihara, Japan",
    height: "159 cm",
    weight: "54 kg",
    debutSeason: 2021,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 0,
    careerPoles: 0,
    fastestLaps: 1,
    helmetImage: "/images/drivers/helmets/yuki-tsunoda.png",
    gallery: [
      "/images/drivers/yuki-tsunoda/1.jpg",
      "/images/drivers/yuki-tsunoda/2.jpg",
      "/images/drivers/yuki-tsunoda/3.jpg",
      "/images/drivers/yuki-tsunoda/4.jpg",
    ],
    socialLinks: {
      instagram: "https://instagram.com/yukitsunoda0511",
      x: "https://x.com/yukitsunoda07",
    },
    careerTimeline: [
      {
        year: 2019,
        title: "Formula 3 Campaign",
        description:
          "Progressed through the FIA Formula 3 Championship as part of the Honda Junior Team.",
      },
      {
        year: 2020,
        title: "Formula 2 Breakthrough",
        description:
          "Finished among the championship leaders to secure a Formula One opportunity.",
      },
      {
        year: 2021,
        title: "Formula One Debut",
        description:
          "Joined AlphaTauri and immediately impressed with points on his debut.",
      },
      {
        year: 2023,
        title: "Team Leader",
        description:
          "Established himself as the experienced leader of the Faenza-based team.",
      },
      {
        year: 2025,
        title: "Consistent Points Scorer",
        description:
          "Continued delivering competitive performances and valuable championship points.",
      },
    ],
    statistics: {
      races: 105,
      points: 245,
      podiumRate: "0.0%",
      winRate: "0.0%",
      poleRate: "0.0%",
      averageFinish: 11.2,
    },
  },
    "isack-hadjar": {
    driverId: "isack-hadjar",
    bio:
      "Isack Hadjar is regarded as one of Formula One's most exciting young prospects. Known for his aggressive qualifying pace, confidence under pressure, and natural speed, he quickly adapted to the demands of Formula One.",
    careerSummary:
      "After rising through the Red Bull Junior Team, Hadjar impressed in Formula 2 before earning a Formula One seat. His rookie campaign showcased strong racecraft, rapid adaptation, and consistent progress throughout the season.",
    birthDate: "2004-09-28",
    birthPlace: "Paris, France",
    height: "167 cm",
    weight: "64 kg",
    debutSeason: 2025,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 0,
    careerPoles: 0,
    fastestLaps: 0,
    helmetImage: "/images/drivers/helmets/isack-hadjar.png",
    gallery: [
      "/images/drivers/isack-hadjar/1.jpg",
      "/images/drivers/isack-hadjar/2.jpg",
      "/images/drivers/isack-hadjar/3.jpg",
      "/images/drivers/isack-hadjar/4.jpg",
    ],
    socialLinks: {
      instagram: "https://instagram.com/isackhadjar",
      x: "https://x.com/isackhadjar",
    },
    careerTimeline: [
      {
        year: 2022,
        title: "Formula 3 Success",
        description:
          "Established himself as one of the championship's quickest young drivers.",
      },
      {
        year: 2023,
        title: "Formula 2 Promotion",
        description:
          "Graduated to Formula 2 as part of the Red Bull Junior Team.",
      },
      {
        year: 2024,
        title: "Formula 2 Title Challenger",
        description:
          "Regularly fought for victories and the Formula 2 championship.",
      },
      {
        year: 2025,
        title: "Formula One Debut",
        description:
          "Joined Racing Bulls and impressed with his pace during his rookie campaign.",
      },
    ],
    statistics: {
      races: 22,
      points: 34,
      podiumRate: "0.0%",
      winRate: "0.0%",
      poleRate: "0.0%",
      averageFinish: 11.6,
    },
  },
    "liam-lawson": {
    driverId: "liam-lawson",
    bio:
      "Liam Lawson is one of New Zealand's brightest motorsport talents. His adaptability, racecraft, and confidence under pressure have enabled him to make a seamless transition into Formula One competition.",
    careerSummary:
      "Lawson progressed through Formula 3, Formula 2, Super Formula, and the Red Bull Junior Programme before making his Formula One debut. Strong substitute performances earned him a full-time Formula One seat, where he quickly demonstrated impressive consistency and speed.",
    birthDate: "2002-02-11",
    birthPlace: "Hastings, New Zealand",
    height: "174 cm",
    weight: "67 kg",
    debutSeason: 2023,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 0,
    careerPoles: 0,
    fastestLaps: 0,
    helmetImage: "/images/drivers/helmets/liam-lawson.png",
    gallery: [
      "/images/drivers/liam-lawson/1.jpg",
      "/images/drivers/liam-lawson/2.jpg",
      "/images/drivers/liam-lawson/3.jpg",
      "/images/drivers/liam-lawson/4.jpg",
    ],
    socialLinks: {
      instagram: "https://instagram.com/liamlawson30",
      x: "https://x.com/LiamLawson30",
    },
    careerTimeline: [
      {
        year: 2021,
        title: "Formula 2 Campaign",
        description:
          "Established himself as one of Formula 2's most promising young drivers.",
      },
      {
        year: 2022,
        title: "Super Formula",
        description:
          "Impressed in Japan's Super Formula Championship while remaining part of the Red Bull Junior Team.",
      },
      {
        year: 2023,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut as a substitute driver and immediately impressed with competitive performances.",
      },
      {
        year: 2025,
        title: "Full-Time Formula One Driver",
        description:
          "Became a full-time Formula One driver after earning a permanent race seat.",
      },
    ],
    statistics: {
      races: 30,
      points: 46,
      podiumRate: "0.0%",
      winRate: "0.0%",
      poleRate: "0.0%",
      averageFinish: 11.8,
    },
  },
    "lance-stroll": {
    driverId: "lance-stroll",
    bio:
      "Lance Stroll is a talented Canadian Formula One driver known for his composure in difficult conditions and his ability to capitalize on unpredictable race situations. His experience and consistency have made him a valuable asset throughout his Formula One career.",
    careerSummary:
      "After winning the FIA European Formula 3 Championship, Stroll graduated to Formula One in 2017. Across spells with Williams, Racing Point, and Aston Martin, he has secured multiple podium finishes while becoming one of the grid's most experienced midfield competitors.",
    birthDate: "1998-10-29",
    birthPlace: "Montreal, Canada",
    height: "182 cm",
    weight: "70 kg",
    debutSeason: 2017,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 3,
    careerPoles: 1,
    fastestLaps: 0,
    helmetImage: "/images/drivers/helmets/lance-stroll.png",
    gallery: [
      "/images/drivers/lance-stroll/1.jpg",
      "/images/drivers/lance-stroll/2.jpg",
      "/images/drivers/lance-stroll/3.jpg",
      "/images/drivers/lance-stroll/4.jpg",
    ],
    socialLinks: {
      website: "https://www.lancestroll.com",
      instagram: "https://instagram.com/lance_stroll",
      x: "https://x.com/lance_stroll",
    },
    careerTimeline: [
      {
        year: 2016,
        title: "European Formula 3 Champion",
        description:
          "Won the FIA European Formula 3 Championship before graduating to Formula One.",
      },
      {
        year: 2017,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut with Williams and became one of the youngest podium finishers in Formula One history.",
      },
      {
        year: 2020,
        title: "First Pole Position",
        description:
          "Claimed his maiden Formula One pole position during the Turkish Grand Prix weekend.",
      },
      {
        year: 2021,
        title: "Aston Martin Era",
        description:
          "Began competing for Aston Martin as the team returned to Formula One under its historic name.",
      },
      {
        year: 2025,
        title: "Experienced Team Driver",
        description:
          "Continued contributing valuable points and technical feedback to Aston Martin's development programme.",
      },
    ],
    statistics: {
      races: 180,
      points: 315,
      podiumRate: "1.7%",
      winRate: "0.0%",
      poleRate: "0.6%",
      averageFinish: 11.0,
    },
  },
    "oliver-bearman": {
    driverId: "oliver-bearman",
    bio:
      "Oliver Bearman is regarded as one of the brightest young talents to emerge from the Ferrari Driver Academy. His impressive qualifying pace, racecraft, and composure under pressure have quickly established him as one of Formula One's most exciting rookies.",
    careerSummary:
      "After winning races throughout Formula 3 and Formula 2, Bearman earned opportunities in Formula One before securing a full-time seat. His mature driving style and technical understanding have earned praise from engineers and fellow drivers alike.",
    birthDate: "2005-05-08",
    birthPlace: "Chelmsford, England",
    height: "184 cm",
    weight: "69 kg",
    debutSeason: 2024,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 0,
    careerPoles: 0,
    fastestLaps: 0,
    helmetImage: "/images/drivers/helmets/oliver-bearman.png",
    gallery: [
      "/images/drivers/oliver-bearman/1.jpg",
      "/images/drivers/oliver-bearman/2.jpg",
      "/images/drivers/oliver-bearman/3.jpg",
      "/images/drivers/oliver-bearman/4.jpg",
    ],
    socialLinks: {
      instagram: "https://instagram.com/olibearman",
      x: "https://x.com/OliverBearman",
    },
    careerTimeline: [
      {
        year: 2022,
        title: "Formula 3 Victory",
        description:
          "Established himself as one of the most promising young drivers in the FIA Formula 3 Championship.",
      },
      {
        year: 2023,
        title: "Formula 2 Race Winner",
        description:
          "Claimed multiple victories while competing for the Formula 2 Championship.",
      },
      {
        year: 2024,
        title: "Formula One Debut",
        description:
          "Impressed during his Formula One debut with a composed points-scoring performance.",
      },
      {
        year: 2025,
        title: "Full-Time Formula One Driver",
        description:
          "Began his first complete Formula One season and continued developing into one of the grid's most promising young competitors.",
      },
    ],
    statistics: {
      races: 24,
      points: 29,
      podiumRate: "0.0%",
      winRate: "0.0%",
      poleRate: "0.0%",
      averageFinish: 11.9,
    },
  },
    "franco-colapinto": {
    driverId: "franco-colapinto",
    bio:
      "Franco Colapinto is one of Argentina's most promising racing talents. His natural speed, adaptability, and confident racecraft have quickly earned him recognition as a future Formula One star.",
    careerSummary:
      "After progressing through Formula Regional, FIA Formula 3, and Formula 2, Colapinto earned his Formula One opportunity through consistently impressive performances. His rookie campaign demonstrated maturity beyond his experience while showcasing excellent race pace.",
    birthDate: "2003-05-27",
    birthPlace: "Pilar, Buenos Aires, Argentina",
    height: "174 cm",
    weight: "68 kg",
    debutSeason: 2024,
    worldChampionships: 0,
    careerWins: 0,
    careerPodiums: 0,
    careerPoles: 0,
    fastestLaps: 0,
    helmetImage: "/images/drivers/helmets/franco-colapinto.png",
    gallery: [
      "/images/drivers/franco-colapinto/1.jpg",
      "/images/drivers/franco-colapinto/2.jpg",
      "/images/drivers/franco-colapinto/3.jpg",
      "/images/drivers/franco-colapinto/4.jpg",
    ],
    socialLinks: {
      instagram: "https://instagram.com/francolapinto",
      x: "https://x.com/FranColapinto",
    },
    careerTimeline: [
      {
        year: 2021,
        title: "Formula Regional Success",
        description:
          "Delivered multiple podium finishes while continuing his rapid development through the junior categories.",
      },
      {
        year: 2022,
        title: "Formula 3 Campaign",
        description:
          "Competed consistently at the front of the FIA Formula 3 Championship.",
      },
      {
        year: 2023,
        title: "Formula 2 Promotion",
        description:
          "Graduated to Formula 2 and established himself as one of the championship's strongest rookies.",
      },
      {
        year: 2024,
        title: "Formula One Debut",
        description:
          "Made his Formula One debut and impressed with mature racecraft and competitive pace.",
      },
      {
        year: 2025,
        title: "Full-Time Formula One Driver",
        description:
          "Continued building experience while consistently improving throughout the championship.",
      },
    ],
    statistics: {
      races: 18,
      points: 23,
      podiumRate: "0.0%",
      winRate: "0.0%",
      poleRate: "0.0%",
      averageFinish: 12.4,
    },
  },
};