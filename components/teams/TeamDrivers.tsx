"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { drivers } from "@/lib/drivers";
import type { TeamDetails } from "@/types/team-details";
import { Users } from "lucide-react";

interface TeamDriversProps {
  details: TeamDetails;
}

export function TeamDrivers({ details }: TeamDriversProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
          <Users className="h-5 w-5 text-[#E10600]" />
        </div>
        <h2 className="text-2xl font-bold text-white">Drivers</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {details.drivers.map((driver, index) => {
          const fullDriver = drivers.find((d) => d.id === driver.id);

          if (!fullDriver) return null;

          return (
            <motion.div
              key={driver.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/drivers/${fullDriver.slug}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#242424] bg-[#050505] p-4 transition-colors hover:border-[#E10600]/30"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#242424]">
                  <Image
                    src={fullDriver.image}
                    alt={driver.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="64px"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-white transition-colors group-hover:text-[#E10600]">
                    {driver.name}
                  </p>

                  <p className="text-xs text-neutral-500">
                    #{driver.number}
                  </p>
                </div>

                <span className="text-lg">{fullDriver.flag}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
