"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Trophy, Medal, Hash, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/* ── Types ─────────────────────────────────────────────────────── */

interface Driver {
  id: string;
  name: string;
  number: number;
  country: string;
  flag: string;
  team: string;
  teamColor: string;
  points: number;
  wins: number;
  podiums: number;
  image: string;
}

/* ── Mock Data ─────────────────────────────────────────────────── */

const drivers: Driver[] = [
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    number: 1,
    country: "Netherlands",
    flag: "🇳🇱",
    team: "Red Bull Racing",
    teamColor: "#1E41FF",
    points: 437,
    wins: 62,
    podiums: 111,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    number: 4,
    country: "United Kingdom",
    flag: "🇬🇧",
    team: "McLaren",
    teamColor: "#FF8000",
    points: 374,
    wins: 5,
    podiums: 24,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    number: 16,
    country: "Monaco",
    flag: "🇲🇨",
    team: "Ferrari",
    teamColor: "#DC0000",
    points: 356,
    wins: 8,
    podiums: 41,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    number: 44,
    country: "United Kingdom",
    flag: "🇬🇧",
    team: "Mercedes",
    teamColor: "#00D2BE",
    points: 246,
    wins: 105,
    podiums: 202,

    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "oscar-piastri",
    name: "Oscar Piastri",
    number: 81,
    country: "Australia",
    flag: "🇦🇺",
    team: "McLaren",
    teamColor: "#FF8000",
    points: 292,
    wins: 4,
    podiums: 16,
image: "/drivers/max-verstappen.webp",
  },
  {
    id: "george-russell",
    name: "George Russell",
    number: 63,
    country: "United Kingdom",
    flag: "🇬🇧",
    team: "Mercedes",
    teamColor: "#00D2BE",
    points: 245,
    wins: 3,
    podiums: 14,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "carlos-sainz",
    name: "Carlos Sainz",
    number: 55,
    country: "Spain",
    flag: "🇪🇸",
    team: "Ferrari",
    teamColor: "#DC0000",
    points: 228,
    wins: 3,
    podiums: 21,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "sergio-perez",
    name: "Sergio Perez",
    number: 11,
    country: "Mexico",
    flag: "🇲🇽",
    team: "Red Bull Racing",
    teamColor: "#1E41FF",
    points: 152,
    wins: 6,
    podiums: 39,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "fernando-alonso",
    name: "Fernando Alonso",
    number: 14,
    country: "Spain",
    flag: "🇪🇸",
    team: "Aston Martin",
    teamColor: "#006F62",
    points: 64,
    wins: 32,
    podiums: 106,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "lance-stroll",
    name: "Lance Stroll",
    number: 18,
    country: "Canada",
    flag: "🇨🇦",
    team: "Aston Martin",
    teamColor: "#006F62",
    points: 24,
    wins: 0,
    podiums: 3,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "pierre-gasly",
    name: "Pierre Gasly",
    number: 10,
    country: "France",
    flag: "🇫🇷",
    team: "Alpine",
    teamColor: "#0090FF",
    points: 16,
    wins: 1,
    podiums: 4,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "esteban-ocon",
    name: "Esteban Ocon",
    number: 31,
    country: "France",
    flag: "🇫🇷",
    team: "Alpine",
    teamColor: "#0090FF",
    points: 14,
    wins: 1,
    podiums: 3,
   image: "/drivers/max-verstappen.webp",
  },
  {
    id: "alexander-albon",
    name: "Alexander Albon",
    number: 23,
    country: "Thailand",
    flag: "🇹🇭",
    team: "Williams",
    teamColor: "#005AFF",
    points: 12,
    wins: 0,
    podiums: 2,
   image: "/drivers/max-verstappen.webp",
  },
  {
    id: "logan-sargeant",
    name: "Logan Sargeant",
    number: 2,
    country: "United States",
    flag: "🇺🇸",
    team: "Williams",
    teamColor: "#005AFF",
    points: 0,
    wins: 0,
    podiums: 0,
  image: "/drivers/max-verstappen.webp",
  },
  {
    id: "yuki-tsunoda",
    name: "Yuki Tsunoda",
    number: 22,
    country: "Japan",
    flag: "🇯🇵",
    team: "RB",
    teamColor: "#2B4562",
    points: 10,
    wins: 0,
    podiums: 0,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "daniel-ricciardo",
    name: "Daniel Ricciardo",
    number: 3,
    country: "Australia",
    flag: "🇦🇺",
    team: "RB",
    teamColor: "#2B4562",
    points: 8,
    wins: 8,
    podiums: 32,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "nico-hulkenberg",
    name: "Nico Hulkenberg",
    number: 27,
    country: "Germany",
    flag: "🇩🇪",
    team: "Haas",
    teamColor: "#B6BABD",
    points: 6,
    wins: 0,
    podiums: 0,
   image: "/drivers/max-verstappen.webp",
  },
  {
    id: "kevin-magnussen",
    name: "Kevin Magnussen",
    number: 20,
    country: "Denmark",
    flag: "🇩🇰",
    team: "Haas",
    teamColor: "#B6BABD",
    points: 4,
    wins: 0,
    podiums: 1,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "valtteri-bottas",
    name: "Valtteri Bottas",
    number: 77,
    country: "Finland",
    flag: "🇫🇮",
    team: "Kick Sauber",
    teamColor: "#52E252",
    points: 0,
    wins: 10,
    podiums: 67,
    image: "/drivers/max-verstappen.webp",
  },
  {
    id: "guanyu-zhou",
    name: "Guanyu Zhou",
    number: 24,
    country: "China",
    flag: "🇨🇳",
    team: "Kick Sauber",
    teamColor: "#52E252",
    points: 0,
    wins: 0,
    podiums: 0,
    image: "/drivers/max-verstappen.webp",
  },
];

const filterChips = ["All", "Red Bull", "Ferrari", "Mercedes", "McLaren", "Aston Martin", "Alpine", "Williams", "RB", "Haas", "Kick Sauber"];

/* ── Stat Item ─────────────────────────────────────────────────── */

function StatItem({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Trophy;
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1 text-muted-foreground">
        <Icon className="h-3 w-3" />
        <span className="text-[10px] font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span className="text-sm font-bold text-white tabular-nums">
        {value}
      </span>
    </div>
  );
}

/* ── Driver Card ───────────────────────────────────────────────── */

function DriverCard({ driver, index }: { driver: Driver; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={`/drivers/${driver.id}`}
          aria-label={`View ${driver.name} profile`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <Card className="overflow-hidden rounded-2xl border border-border bg-card">
            <div
              className="h-1 w-full"
              style={{ backgroundColor: driver.teamColor }}
            />
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={driver.image}
                    alt={driver.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-bold text-white">
                    {driver.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-[#B5B5B5]">{driver.team}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span role="img" aria-label={driver.country}>
                        {driver.flag}
                      </span>
                      {driver.country}
                    </span>
                  </div>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#181818] border border-border">
                  <span className="text-sm font-bold text-white tabular-nums">
                    {driver.number}
                  </span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-borderbg-[#0B0B0B] p-3">
                <StatItem icon={Trophy} value={driver.wins} label="Wins" />
                <StatItem icon={Medal} value={driver.podiums} label="Podiums" />
                <StatItem icon={Hash} value={driver.points} label="Points" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  View Profile
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-[#181818] text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050505] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#E10600]/[0.03] blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-4 relative"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#E10600]">
            2026 Season
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Drivers
          </h1>
          <p className="mt-4 max-w-xl text-base text-[#B5B5B5]">
            Meet the 20 elite drivers competing for the Formula 1 World
            Championship.
          </p>
        </motion.div>
      </section>

      {/* Search + Filters */}
      <section className="border-b border-border bg-[#050505] pb-8">
        <div className="container mx-auto px-4">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search drivers, teams, nationalities..."
className="h-12 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              
            />
          </motion.div>

          {/* Filter Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {filterChips.map((chip) => (
              <button
                key={chip}
                type="button"
 className={`inline-flex h-9 items-center rounded-lg border px-4 text-xs font-medium ${
  chip === "All"
    ? "border-primary bg-primary/10 text-primary"
    : "border-border bg-card text-muted-foreground hover:border-primary/40"
}`}
              >
                {chip}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {drivers.map((driver, index) => (
              <DriverCard key={driver.id} driver={driver} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Placeholder */}
      <section className="border-t border-[#242424] bg-[#050505] py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              disabled
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-sm font-medium text-[#5F5F5F] disabled:opacity-50"
            >
              &lt;
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E10600] bg-[#E10600]/10 text-sm font-bold text-[#E10600]"
            >
              1
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-[#343434] hover:text-white"
            >
              2
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-[#343434] hover:text-white"
            >
              3
            </button>
            <span className="text-sm text-muted-foreground">...</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-sm font-medium text- transition-all duration-200 hover:border-[#343434] hover:text-white"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}