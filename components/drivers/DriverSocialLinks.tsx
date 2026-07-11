"use client";

import { motion } from "framer-motion";
import type { DriverDetails } from "@/types/driver-details";

interface DriverSocialLinksProps {
  details: DriverDetails;
}

export default function DriverSocialLinks({ details }: DriverSocialLinksProps) {
  if (!details.socials || details.socials.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4">
      {details.socials.map((social) => (
        <motion.a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
        >
          {social.platform === "Instagram" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          )}
          {social.handle}
        </motion.a>
      ))}
    </div>
  );
}