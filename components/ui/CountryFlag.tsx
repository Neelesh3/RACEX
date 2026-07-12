"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// Mapping of country names to their SVG file names in public/flags/
const FLAG_MAPPING: Record<string, string> = {
  australia: "australia.svg",
  austria: "austria.svg",
  azerbaijan: "azerbaijan.svg",
  bahrain: "bahrain.svg",
  belgium: "belgium.svg",
  brazil: "brazil.svg",
  canada: "canada.svg",
  china: "china.svg",
  france: "france.svg",
  germany: "germany.svg",
  hungary: "hungary.svg",
  india: "india.svg",
  italy: "italy.svg",
  japan: "japan.svg",
  mexico: "mexico.svg",
  monaco: "monaco.svg",
  netherlands: "netherlands.svg",
  qatar: "qatar.svg",
  "saudi arabia": "saudi-arabia.svg",
  singapore: "singapore.svg",
  spain: "spain.svg",
  thailand: "thailand.svg",
  uae: "uae.svg",
  "united arab emirates": "uae.svg",
  uk: "uk.svg",
  "united kingdom": "uk.svg",
  "great britain": "uk.svg",
  usa: "usa.svg",
  "united states": "usa.svg",
  "united states of america": "usa.svg",
  // Emoji mappings
  "🇳🇱": "netherlands.svg",
  "🇬🇧": "uk.svg",
  "🇲🇨": "monaco.svg",
  "🇦🇺": "australia.svg",
  "🇪🇸": "spain.svg",
  "🇫🇷": "france.svg",
  "🇹🇭": "thailand.svg",
  "🇮🇹": "italy.svg",
  "🇨🇦": "canada.svg",
  "🇩🇪": "germany.svg",
  "🇯🇵": "japan.svg",
  "🇧🇷": "brazil.svg",
  "🇲🇽": "mexico.svg",
  "🇺🇸": "usa.svg",
  "🇨🇳": "china.svg",
};

interface CountryFlagProps {
  country: string;
  fallback?: string;
  className?: string;
}

export function CountryFlag({ country, fallback, className }: CountryFlagProps) {
  const normalizedCountry = country.trim().toLowerCase();
  const flagFile = FLAG_MAPPING[normalizedCountry];

  if (flagFile) {
    return (
      <span className={cn("relative inline-flex items-center shrink-0 w-5 h-3.5 overflow-hidden rounded-[2px] border border-white/10 shadow-sm", className)}>
        <Image
          src={`/flags/${flagFile}`}
          alt={`${country} flag`}
          fill
          className="object-cover"
          sizes="20px"
        />
      </span>
    );
  }

  // Fallback to emoji if no SVG asset is available on disk
  if (fallback) {
    return (
      <span
        className={cn("text-base leading-none select-none shrink-0", className)}
        role="img"
        aria-label={`${country} flag`}
      >
        {fallback}
      </span>
    );
  }

  return null;
}
