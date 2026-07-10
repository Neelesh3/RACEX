"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flag, Zap, Bell, ChevronRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Benefit {
  id: string;
  icon: React.ReactNode;
  text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS: Benefit[] = [
  {
    id: "race-alerts",
    icon: <Flag className="w-3.5 h-3.5" aria-hidden="true" />,
    text: "Live race day alerts",
  },
  {
    id: "breaking-news",
    icon: <Zap className="w-3.5 h-3.5" aria-hidden="true" />,
    text: "Breaking team news first",
  },
  {
    id: "standings",
    icon: <Bell className="w-3.5 h-3.5" aria-hidden="true" />,
    text: "Weekly standings digest",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Newsletter() {
  return (
    <motion.section
      aria-labelledby="newsletter-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="relative max-w-2xl mx-auto">

          {/* background glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, #E8002D 0%, transparent 70%)",
            }}
          />

          <Card className="relative overflow-hidden rounded-2xl border-border bg-card backdrop-blur-xl">
            {/* top accent bar */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8002D]"
            />

            <CardContent className="px-6 py-10 sm:px-10 sm:py-12 flex flex-col items-center text-center gap-8">

              {/* eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8002D]"
              >
                RaceX Insider
              </motion.p>

              {/* heading */}
              <motion.h2
                id="newsletter-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight"
              >
                Stay ahead of the grid
              </motion.h2>

              {/* description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md"
              >
                Get race results, team updates, and championship insights
                delivered straight to your inbox — before the podium ceremony ends.
              </motion.p>

              {/* form */}
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
                aria-label="Newsletter signup"
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  className="
                    flex-1 h-11
                    bg-background border-border
                    text-white placeholder:text-white/30
                    focus-visible:ring-[#E8002D] focus-visible:border-primary/50
                    rounded-xl
                  "
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  <Button
                    type="submit"
                    className="
                      h-11 px-6 rounded-xl
                      bg-[#E8002D] hover:bg-primary/90
                      text-white font-semibold text-sm
                      shadow-[0_4px_20px_rgba(232,0,45,0.35)]
                      hover:shadow-[0_4px_28px_rgba(232,0,45,0.5)]
                      transition-all duration-200
                      whitespace-nowrap
                      w-full sm:w-auto
                    "
                    aria-label="Subscribe to the RaceX newsletter"
                  >
                    Subscribe
                    <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Button>
                </motion.div>
              </motion.form>

              {/* benefits */}
              <motion.ul
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
                aria-label="Newsletter benefits"
              >
                {BENEFITS.map((benefit) => (
                  <li
                    key={benefit.id}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-[#E8002D]">{benefit.icon}</span>
                    {benefit.text}
                  </li>
                ))}
              </motion.ul>

              {/* fine print */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-[11px] text-muted-foreground/70"
              >
                No spam. Unsubscribe at any time.
              </motion.p>

            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}