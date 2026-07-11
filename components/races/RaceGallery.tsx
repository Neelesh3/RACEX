"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Race } from "@/types/race";
import type { RaceDetails } from "@/types/race-details";
import { Images } from "lucide-react";

interface RaceGalleryProps {
  race: Race;
  details: RaceDetails;
}

export function RaceGallery({ race, details }: RaceGalleryProps) {
  // If the gallery has no images, render the placeholder
  if (!details.gallery || details.gallery.length === 0) {
    return (
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center rounded-[20px] border border-[#242424] bg-[#111111] p-12 text-center max-w-xl mx-auto"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Images className="h-6 w-6 text-neutral-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No Gallery</h3>
          <p className="text-sm text-neutral-400">
            No race gallery available.
          </p>
        </motion.div>
      </div>
    );
  }

  const featuredImage = details.gallery[0];
  const remainingImages = details.gallery.slice(1);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
    >
      {/* Gallery Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
          <Images className="h-5 w-5 text-[#E10600]" />
        </div>
        <h2 className="text-2xl font-bold text-white">Gallery</h2>
      </div>

      {/* Featured Full-Width Hero Image */}
      {featuredImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[14px] border border-[#242424] mb-6 cursor-pointer"
        >
          <Image
            src={featuredImage}
            alt={`${race.name} - Featured Action`}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#050505]/0 transition-colors group-hover:bg-[#050505]/20" />
        </motion.div>
      )}

      {/* Grid of Remaining Images */}
      {remainingImages.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {remainingImages.map((image, index) => (
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
              className="group relative aspect-video overflow-hidden rounded-[14px] border border-[#242424] cursor-pointer"
            >
              <Image
                src={image}
                alt={`${race.name} - Gallery Image ${index + 2}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#050505]/0 transition-colors group-hover:bg-[#050505]/20" />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
