"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Trophy, Medal, Hash, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


/* ── Types ─────────────────────────────────────────────────────── */

interface Driver {
    id: string;
    name: string;
    number: number;
    country: string;
    flag: string;
    team: string;
    teamColor: string;
    wins: number;
    podiums: number;
    points: number;
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
        wins: 62,
        podiums: 111,
        points: 437,
        image: "/images/drivers/max.png",
    },
    {
        id: "lando-norris",
        name: "Lando Norris",
        number: 4,
        country: "United Kingdom",
        flag: "🇬🇧",
        team: "McLaren",
        teamColor: "#FF8000",
        wins: 5,
        podiums: 24,
        points: 374,
        image: "/images/drivers/lando.png",
    },
    {
        id: "charles-leclerc",
        name: "Charles Leclerc",
        number: 16,
        country: "Monaco",
        flag: "🇲🇨",
        team: "Ferrari",
        teamColor: "#DC0000",
        wins: 8,
        podiums: 41,
        points: 356,
        image: "/images/drivers/leclerc.png",
    },
    {
        id: "lewis-hamilton",
        name: "Lewis Hamilton",
        number: 44,
        country: "United Kingdom",
        flag: "🇬🇧",
        team: "Mercedes",
        teamColor: "#00D2BE",
        wins: 105,
        podiums: 202,
        points: 246,
        image: "/images/drivers/hamilton.png",
    },
    {
        id: "oscar-piastri",
        name: "Oscar Piastri",
        number: 81,
        country: "Australia",
        flag: "🇦🇺",
        team: "McLaren",
        teamColor: "#FF8000",
        wins: 4,
        podiums: 16,
        points: 292,
        image: "/images/drivers/piastri.png",
    },
    {
        id: "george-russell",
        name: "George Russell",
        number: 63,
        country: "United Kingdom",
        flag: "🇬🇧",
        team: "Mercedes",
        teamColor: "#00D2BE",
        wins: 3,
        podiums: 14,
        points: 245,
        image: "/images/drivers/russell.png",
    },
];

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
            <div className="flex items-center gap-1 text-[#808080]">
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
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <Link
                href={`/drivers/${driver.id}`}
                aria-label={`View ${driver.name} profile`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
                <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <Card className="overflow-hidden border-border bg-card">
                        {/* Team color strip */}
                        <div
                            className="h-1 w-full"
                            style={{ backgroundColor: driver.teamColor }}
                        />

                        <CardContent className="p-5">
                            {/* Photo + info row */}
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
                                    <div className="mt-1 flex items-center gap-2 text-xs text-[#808080]">
                                        <span className="flex items-center gap-1">
                                            <span role="img" aria-label={driver.country}>
                                                {driver.flag}
                                            </span>
                                            {driver.country}
                                        </span>
                                    </div>
                                </div>

                                {/* Number */}
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#181818] border border-[#242424]">
                                    <span className="text-sm font-bold text-white tabular-nums">
                                        {driver.number}
                                    </span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-[#242424] bg-[#0B0B0B] p-3">
                                <StatItem icon={Trophy} value={driver.wins} label="Wins" />
                                <StatItem icon={Medal} value={driver.podiums} label="Podiums" />
                                <StatItem icon={Hash} value={driver.points} label="Points" />
                            </div>

                            {/* CTA */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs font-medium text-[#808080]">
                                    View Profile
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#242424] bg-[#181818] text-[#808080]">
                                    <ChevronRight className="h-4 w-4" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </Link>
        </motion.div>
    );
}

/* ── Section ─────────────────────────────────────────────────────── */

export function FeaturedDrivers() {
    return (
        <section
            className="relative bg-[#050505] py-20 md:py-28"
            aria-labelledby="featured-drivers-heading"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
                >
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-[#E10600]">
                            Featured Drivers
                        </span>
                        <h2
                            id="featured-drivers-heading"
                            className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
                        >
                            Meet the Grid
                        </h2>
                    </div>

                    <Link
                        href="/drivers"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent hover:border-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        View All Drivers
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {drivers.map((driver, index) => (
                        <DriverCard key={driver.id} driver={driver} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}