import type { TeamDetails } from "@/types/team-details";

function createSocials(
  instagram: string,
  x: string
) {
  return [
    {
      platform: "Instagram",
      handle: `@${instagram}`,
      url: `https://instagram.com/${instagram}`,
    },
    {
      platform: "X",
      handle: `@${x}`,
      url: `https://x.com/${x}`,
    },
  ];
}

export const teamDetails: Record<string, TeamDetails> = {
  "red-bull-racing": {
    teamId: "red-bull-racing",
    overview:
      "Oracle Red Bull Racing is one of Formula One's most successful modern teams, renowned for engineering excellence, relentless innovation and championship-winning performance.",
    history:
      "Founded after Red Bull GmbH acquired Jaguar Racing in 2004, the Milton Keynes-based team rapidly rose to the front of the grid. Under Adrian Newey's technical leadership, Red Bull dominated Formula One during the early 2010s and again in the ground-effect era.",
    founded: 2005,
    base: "Milton Keynes, United Kingdom",
    teamPrincipal: "Christian Horner",
    technicalDirector: "Pierre Waché",
    engineSupplier: "Honda RBPT",
    chassis: "RB21",
    worldChampionships: 6,
    raceWins: 124,
    polePositions: 107,
    fastestLaps: 100,
    podiums: 282,
    firstEntry: 2005,
    gallery: [],
    socials: createSocials(
      "redbullracing",
      "redbullracing"
    ),
    drivers: [
      {
        id: "max-verstappen",
        name: "Max Verstappen",
        number: 1,
      },
      {
        id: "yuki-tsunoda",
        name: "Yuki Tsunoda",
        number: 22,
      },
    ],
    achievements: [
      {
        year: "2010",
        title: "First Constructors' Championship",
        description:
          "Captured the team's first Formula One Constructors' Championship.",
      },
      {
        year: "2021",
        title: "Drivers' Championship",
        description:
          "Returned to the top with Max Verstappen's world title.",
      },
      {
        year: "2023",
        title: "Record Breaking Season",
        description:
          "Achieved one of the most dominant seasons in Formula One history.",
      },
    ],
    statistics: {
      seasons: 21,
      championships: 6,
      wins: 124,
      podiums: 282,
      poles: 107,
      fastestLaps: 100,
    },
  },

  ferrari: {
    teamId: "ferrari",
    overview:
      "Scuderia Ferrari is the oldest and most iconic team in Formula One, competing continuously since the inaugural World Championship season.",
    history:
      "Founded by Enzo Ferrari, Scuderia Ferrari has become synonymous with Formula One success. The Italian marque has won numerous championships while producing many legendary drivers and unforgettable victories.",
    founded: 1929,
    base: "Maranello, Italy",
    teamPrincipal: "Frédéric Vasseur",
    technicalDirector: "Loïc Serra",
    engineSupplier: "Ferrari",
    chassis: "SF-25",
    worldChampionships: 16,
    raceWins: 248,
    polePositions: 253,
    fastestLaps: 263,
    podiums: 830,
    firstEntry: 1950,
    gallery: [],
    socials: createSocials(
      "scuderiaferrari",
      "scuderiaf1"
    ),
    drivers: [
      {
        id: "charles-leclerc",
        name: "Charles Leclerc",
        number: 16,
      },
      {
        id: "lewis-hamilton",
        name: "Lewis Hamilton",
        number: 44,
      },
    ],
    achievements: [
      {
        year: "1950",
        title: "Formula One Debut",
        description:
          "Competed in the inaugural Formula One World Championship season.",
      },
      {
        year: "2004",
        title: "Historic Dominance",
        description:
          "Completed one of the most successful championship campaigns in Formula One history.",
      },
      {
        year: "Most Successful Team",
        title: "Formula One Legacy",
        description:
          "Holds the record for the most Constructors' Championships in Formula One.",
      },
    ],
    statistics: {
      seasons: 76,
      championships: 16,
      wins: 248,
      podiums: 830,
      poles: 253,
      fastestLaps: 263,
    },
  },
    mercedes: {
    teamId: "mercedes",
    overview:
      "Mercedes-AMG PETRONAS Formula One Team is one of the most dominant teams of the hybrid era, combining engineering excellence with sustained championship success.",
    history:
      "Mercedes returned as a full works team in 2010 after acquiring Brawn GP. The introduction of hybrid power units in 2014 marked the beginning of one of Formula One's greatest dynasties.",
    founded: 2010,
    base: "Brackley, United Kingdom",
    teamPrincipal: "Toto Wolff",
    technicalDirector: "James Allison",
    engineSupplier: "Mercedes",
    chassis: "W16",
    worldChampionships: 8,
    raceWins: 129,
    polePositions: 140,
    fastestLaps: 100,
    podiums: 300,
    firstEntry: 2010,
    gallery: [],
    socials: createSocials(
      "mercedesamgf1",
      "MercedesAMGF1"
    ),
    drivers: [
      {
        id: "george-russell",
        name: "George Russell",
        number: 63,
      },
      {
        id: "kimi-antonelli",
        name: "Andrea Kimi Antonelli",
        number: 12,
      },
    ],
    achievements: [
      {
        year: "2014",
        title: "Hybrid Era Begins",
        description:
          "Started an unprecedented run of Constructors' Championships.",
      },
      {
        year: "2020",
        title: "Seven Consecutive Titles",
        description:
          "Extended Formula One's longest Constructors' Championship streak.",
      },
      {
        year: "Modern Formula One Dynasty",
        title: "Engineering Excellence",
        description:
          "Defined the hybrid era through innovation and consistency.",
      },
    ],
    statistics: {
      seasons: 16,
      championships: 8,
      wins: 129,
      podiums: 300,
      poles: 140,
      fastestLaps: 100,
    },
  },

  mclaren: {
    teamId: "mclaren",
    overview:
      "McLaren Racing is one of Formula One's most historic and successful teams, celebrated for technical innovation, legendary drivers and championship success.",
    history:
      "Founded by Bruce McLaren in 1963, the team has built a remarkable legacy through decades of racing excellence, winning championships across multiple eras.",
    founded: 1963,
    base: "Woking, United Kingdom",
    teamPrincipal: "Andrea Stella",
    technicalDirector: "Neil Houldey",
    engineSupplier: "Mercedes",
    chassis: "MCL39",
    worldChampionships: 9,
    raceWins: 189,
    polePositions: 164,
    fastestLaps: 170,
    podiums: 530,
    firstEntry: 1966,
    gallery: [],
    socials: createSocials(
      "mclaren",
      "McLarenF1"
    ),
    drivers: [
      {
        id: "lando-norris",
        name: "Lando Norris",
        number: 4,
      },
      {
        id: "oscar-piastri",
        name: "Oscar Piastri",
        number: 81,
      },
    ],
    achievements: [
      {
        year: "1974",
        title: "First Constructors' Championship",
        description:
          "Captured the team's first Formula One Constructors' title.",
      },
      {
        year: "1988",
        title: "Historic Dominance",
        description:
          "Completed one of the greatest seasons in Formula One history.",
      },
      {
        year: "Championship Legacy",
        title: "Multiple World Titles",
        description:
          "Established itself as one of the sport's most decorated teams.",
      },
    ],
    statistics: {
      seasons: 60,
      championships: 9,
      wins: 189,
      podiums: 530,
      poles: 164,
      fastestLaps: 170,
    },
  },
    "aston-martin": {
    teamId: "aston-martin",
    overview:
      "Aston Martin Aramco Formula One Team combines a rich motorsport heritage with modern investment, world-class facilities and long-term championship ambitions.",
    history:
      "The current team traces its origins to Jordan Grand Prix before evolving through Midland, Spyker, Force India and Racing Point. Rebranded as Aston Martin in 2021, the team continues to expand its Formula One operations at Silverstone.",
    founded: 2021,
    base: "Silverstone, United Kingdom",
    teamPrincipal: "Andy Cowell",
    technicalDirector: "Enrico Cardile",
    engineSupplier: "Mercedes",
    chassis: "AMR25",
    worldChampionships: 0,
    raceWins: 1,
    polePositions: 1,
    fastestLaps: 3,
    podiums: 9,
    firstEntry: 2021,
    gallery: [],
    socials: createSocials(
      "astonmartinf1",
      "AstonMartinF1"
    ),
    drivers: [
      {
        id: "fernando-alonso",
        name: "Fernando Alonso",
        number: 14,
      },
      {
        id: "lance-stroll",
        name: "Lance Stroll",
        number: 18,
      },
    ],
    achievements: [
      {
        year: "2021",
        title: "Aston Martin Returns",
        description:
          "Returned to Formula One under the Aston Martin works identity.",
      },
      {
        year: "2023",
        title: "Podium Revival",
        description:
          "Became a regular podium contender with Fernando Alonso.",
      },
      {
        year: "Future Factory",
        title: "State-of-the-Art Campus",
        description:
          "Opened a modern Formula One Technology Campus at Silverstone.",
      },
    ],
    statistics: {
      seasons: 5,
      championships: 0,
      wins: 1,
      podiums: 9,
      poles: 1,
      fastestLaps: 3,
    },
  },

  alpine: {
    teamId: "alpine",
    overview:
      "BWT Alpine Formula One Team represents Renault's modern Formula One programme, combining French engineering with a rich racing legacy.",
    history:
      "Although Alpine entered Formula One under its current name in 2021, the organisation traces its roots back to the historic Enstone team, previously competing as Benetton, Renault and Lotus.",
    founded: 2021,
    base: "Enstone, United Kingdom",
    teamPrincipal: "Flavio Briatore",
    technicalDirector: "David Sanchez",
    engineSupplier: "Renault",
    chassis: "A525",
    worldChampionships: 2,
    raceWins: 21,
    polePositions: 20,
    fastestLaps: 16,
    podiums: 105,
    firstEntry: 2021,
    gallery: [],
    socials: createSocials(
      "alpinef1team",
      "AlpineF1Team"
    ),
    drivers: [
      {
        id: "pierre-gasly",
        name: "Pierre Gasly",
        number: 10,
      },
      {
        id: "franco-colapinto",
        name: "Franco Colapinto",
        number: 43,
      },
    ],
    achievements: [
      {
        year: "2005",
        title: "Constructors' Championship",
        description:
          "Won the Constructors' World Championship as Renault.",
      },
      {
        year: "2006",
        title: "Championship Double",
        description:
          "Successfully defended both Drivers' and Constructors' titles.",
      },
      {
        year: "2021",
        title: "Alpine Era Begins",
        description:
          "Started a new chapter competing under the Alpine Formula One Team name.",
      },
    ],
    statistics: {
      seasons: 5,
      championships: 2,
      wins: 21,
      podiums: 105,
      poles: 20,
      fastestLaps: 16,
    },
  },
    williams: {
    teamId: "williams",
    overview:
      "Williams Racing is one of Formula One's most iconic constructors, celebrated for engineering excellence, championship success and an enduring independent racing spirit.",
    history:
      "Founded by Sir Frank Williams and Patrick Head, Williams became one of the dominant forces in Formula One throughout the 1980s and 1990s, winning numerous Drivers' and Constructors' Championships.",
    founded: 1977,
    base: "Grove, United Kingdom",
    teamPrincipal: "James Vowles",
    technicalDirector: "Pat Fry",
    engineSupplier: "Mercedes",
    chassis: "FW47",
    worldChampionships: 9,
    raceWins: 114,
    polePositions: 128,
    fastestLaps: 133,
    podiums: 313,
    firstEntry: 1978,
    gallery: [],
    socials: createSocials(
      "williamsracing",
      "WilliamsRacing"
    ),
    drivers: [
      {
        id: "alexander-albon",
        name: "Alexander Albon",
        number: 23,
      },
      {
        id: "carlos-sainz",
        name: "Carlos Sainz",
        number: 55,
      },
    ],
    achievements: [
      {
        year: "1980",
        title: "First Constructors' Championship",
        description:
          "Captured the team's first Formula One Constructors' title.",
      },
      {
        year: "1992",
        title: "Dominant Championship Season",
        description:
          "Produced one of the greatest championship-winning campaigns in Formula One history.",
      },
      {
        year: "1997",
        title: "Ninth Constructors' Championship",
        description:
          "Won the most recent Constructors' Championship in the team's illustrious history.",
      },
    ],
    statistics: {
      seasons: 48,
      championships: 9,
      wins: 114,
      podiums: 313,
      poles: 128,
      fastestLaps: 133,
    },
  },

  haas: {
    teamId: "haas",
    overview:
      "MoneyGram Haas F1 Team is America's Formula One team, competing with a lean operational model and a strong technical partnership with Ferrari.",
    history:
      "Founded by Gene Haas, the team entered Formula One in 2016 and immediately impressed by scoring points on its debut. Haas continues to develop as a competitive midfield team with an international engineering structure.",
    founded: 2016,
    base: "Kannapolis, North Carolina, USA",
    teamPrincipal: "Ayao Komatsu",
    technicalDirector: "Andrea De Zordo",
    engineSupplier: "Ferrari",
    chassis: "VF-25",
    worldChampionships: 0,
    raceWins: 0,
    polePositions: 1,
    fastestLaps: 2,
    podiums: 0,
    firstEntry: 2016,
    gallery: [],
    socials: createSocials(
      "haasf1team",
      "HaasF1Team"
    ),
    drivers: [
      {
        id: "esteban-ocon",
        name: "Esteban Ocon",
        number: 31,
      },
      {
        id: "oliver-bearman",
        name: "Oliver Bearman",
        number: 87,
      },
    ],
    achievements: [
      {
        year: "2016",
        title: "Formula One Debut",
        description:
          "Scored points in the team's very first Formula One Grand Prix.",
      },
      {
        year: "2022",
        title: "Historic Pole Position",
        description:
          "Secured the team's first-ever Formula One pole position at Interlagos.",
      },
      {
        year: "Growth Era",
        title: "Established Midfield Team",
        description:
          "Continued developing as a competitive independent Formula One constructor.",
      },
    ],
    statistics: {
      seasons: 10,
      championships: 0,
      wins: 0,
      podiums: 0,
      poles: 1,
      fastestLaps: 2,
    },
  },
    "racing-bulls": {
    teamId: "racing-bulls",
    overview:
      "Visa Cash App Racing Bulls Formula One Team serves as Red Bull's sister team, focusing on developing young talent while competing in the Formula One midfield.",
    history:
      "Originally founded as Minardi, the Faenza-based team evolved through Scuderia Toro Rosso and AlphaTauri before becoming Visa Cash App Racing Bulls. The team has played a crucial role in developing multiple Formula One race winners and world champions.",
    founded: 1985,
    base: "Faenza, Italy",
    teamPrincipal: "Laurent Mekies",
    technicalDirector: "Jody Egginton",
    engineSupplier: "Honda RBPT",
    chassis: "VCARB 02",
    worldChampionships: 0,
    raceWins: 2,
    polePositions: 1,
    fastestLaps: 4,
    podiums: 4,
    firstEntry: 1985,
    gallery: [],
    socials: createSocials(
      "visacashapprb",
      "visacashapprb"
    ),
    drivers: [
      {
        id: "isack-hadjar",
        name: "Isack Hadjar",
        number: 6,
      },
      {
        id: "liam-lawson",
        name: "Liam Lawson",
        number: 30,
      },
    ],
    achievements: [
      {
        year: "2008",
        title: "Historic Maiden Victory",
        description:
          "Sebastian Vettel delivered the team's first Formula One victory at Monza.",
      },
      {
        year: "2020",
        title: "Second Grand Prix Victory",
        description:
          "Pierre Gasly secured an emotional victory at the Italian Grand Prix.",
      },
      {
        year: "Driver Development",
        title: "Future Champions",
        description:
          "Successfully developed multiple Formula One race winners and world champions through the Red Bull Junior Programme.",
      },
    ],
    statistics: {
      seasons: 41,
      championships: 0,
      wins: 2,
      podiums: 4,
      poles: 1,
      fastestLaps: 4,
    },
  },

  "kick-sauber": {
    teamId: "kick-sauber",
    overview:
      "Stake F1 Team Kick Sauber combines one of Formula One's longest-running independent organisations with the transition toward the future Audi Formula One works programme.",
    history:
      "Founded by Peter Sauber in Switzerland, the Hinwil-based organisation has competed under several identities while maintaining a reputation for engineering excellence and developing future Formula One stars.",
    founded: 1970,
    base: "Hinwil, Switzerland",
    teamPrincipal: "Jonathan Wheatley",
    technicalDirector: "James Key",
    engineSupplier: "Ferrari",
    chassis: "C45",
    worldChampionships: 0,
    raceWins: 1,
    polePositions: 1,
    fastestLaps: 7,
    podiums: 27,
    firstEntry: 1993,
    gallery: [],
    socials: createSocials(
      "stakef1team_ks",
      "stakef1team_ks"
    ),
    drivers: [
      {
        id: "nico-hulkenberg",
        name: "Nico Hülkenberg",
        number: 27,
      },
      {
        id: "gabriel-bortoleto",
        name: "Gabriel Bortoleto",
        number: 5,
      },
    ],
    achievements: [
      {
        year: "1993",
        title: "Formula One Debut",
        description:
          "Entered the Formula One World Championship as an independent Swiss constructor.",
      },
      {
        year: "2008",
        title: "BMW Sauber Victory",
        description:
          "Recorded the team's first Formula One Grand Prix victory.",
      },
      {
        year: "2026",
        title: "Audi Factory Transition",
        description:
          "Prepared for the team's next era as the Audi Formula One works entry.",
      },
    ],
    statistics: {
      seasons: 33,
      championships: 0,
      wins: 1,
      podiums: 27,
      poles: 1,
      fastestLaps: 7,
    },
  },
};