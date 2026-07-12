"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { TeamDetails } from "@/types/team-details";
import { Images } from "lucide-react";

interface TeamGalleryProps {
  details: TeamDetails;
}

export function TeamGallery({ details }: TeamGalleryProps) {
  if (!details.gallery || details.gallery.length === 0) {
    return null;
  }

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
          <Images className="h-5 w-5 text-[#E10600]" />
        </div>
        <h2 className="text-2xl font-bold text-white">Gallery</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {details.gallery.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative aspect-square overflow-hidden rounded-[14px] border border-[#242424]"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-[#050505]/0 transition-colors group-hover:bg-[#050505]/20" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
