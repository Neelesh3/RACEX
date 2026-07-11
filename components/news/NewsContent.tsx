"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { News } from "@/types/news";
import type { NewsDetails } from "@/types/news-details";

interface NewsContentProps {
  news: News;
  details: NewsDetails;
}

export function NewsContent({ details }: NewsContentProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Structured Article Sections */}
      <div className="space-y-8">
        {details.sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            {section.heading && (
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>
            )}
            <p className="text-zinc-300 leading-relaxed text-base font-medium">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Optional Blockquote */}
      {details.blockquote && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border-l-4 border-[#E10600] bg-[#111111] p-6 md:p-8"
        >
          {/* Giant Quote Mark Graphic */}
          <span className="absolute -top-5 left-4 text-8xl font-serif font-black text-[#E10600]/15 select-none pointer-events-none">
            “
          </span>
          <p className="relative text-lg font-semibold italic text-white md:text-xl pl-4 leading-relaxed">
            {details.blockquote}
          </p>
        </motion.div>
      )}

      {/* Media Gallery */}
      {details.gallery && details.gallery.length > 0 && (
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold text-white tracking-tight">Media Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group space-y-3"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl border border-[#242424] bg-[#050505]">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-xs text-neutral-400 font-medium pl-1 leading-snug">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
