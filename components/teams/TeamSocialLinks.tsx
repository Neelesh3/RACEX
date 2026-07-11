"use client";

import { motion } from "framer-motion";
import type { TeamDetails } from "@/types/team-details";
import {
  Globe,
  AtSign,
} from "lucide-react";

interface TeamSocialLinksProps {
  details: TeamDetails;
}

const platformIcons: Record<string, React.ReactNode> = {
  website: <Globe className="h-5 w-5" />,
  instagram: <AtSign className="h-5 w-5" />,
  twitter: <AtSign className="h-5 w-5" />,
  facebook: <Globe className="h-5 w-5" />,
  youtube: <Globe className="h-5 w-5" />,
};

export function TeamSocialLinks({ details }: TeamSocialLinksProps) {
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
          <Globe className="h-5 w-5 text-[#E10600]" />
        </div>
        <h2 className="text-2xl font-bold text-white">Socials</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {details.socials.map((social, index) => (
          <motion.a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex flex-col items-center gap-3 rounded-[14px] border border-[#242424] bg-[#050505] p-5 text-center transition-colors hover:border-[#E10600]/30"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#111111] text-neutral-400 transition-colors group-hover:text-[#E10600]">
              {platformIcons[social.platform.toLowerCase()] ?? <Globe className="h-5 w-5" />}
            </div>
            <span className="text-sm font-semibold capitalize text-white">{social.platform}</span>
            <span className="text-xs text-neutral-500">{social.handle}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
