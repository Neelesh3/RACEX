
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Heart,
  Code2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

/* ── Navigation Data ─────────────────────────────────────────────── */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Drivers", href: "/drivers" },
  { label: "Teams", href: "/teams" },
  { label: "Races", href: "/races" },
  { label: "Standings", href: "/standings" },
  { label: "News", href: "/news" },
];

const resourceLinks = [
  { label: "Schedule", href: "/races" },
  { label: "Results", href: "/standings" },
  { label: "Constructors", href: "/teams" },
  { label: "Drivers", href: "/drivers" },
  { label: "Circuits", href: "/circuits" },
];

const socialLinks = [
  { label: "Twitter", icon: Globe, href: "https://twitter.com" },
  { label: "Instagram", icon: Globe, href: "https://instagram.com" },
  { label: "YouTube", icon: Globe, href: "https://youtube.com" },
  { label: "GitHub", icon: Code2, href: "https://github.com" },
];
/* ── Footer Link ─────────────────────────────────────────────────── */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-[#808080] transition-colors duration-200 hover:text-white"
    >
      {children}
    </Link>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="relative bg-background pt-20 md:pt-28">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E10600]">
                <span className="text-sm font-bold text-white">R</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Race<span className="text-primary">X</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#808080]">
              The ultimate Formula 1 platform. Live race data, driver analytics,
              and premium F1 content for racing enthusiasts worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer resources">
              {resourceLinks.map((link) => (
                <FooterLink key={link.href + link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h3>
            <p className="text-sm text-[#808080]">
              Get race updates and exclusive content delivered to your inbox.
            </p>

            <Card className="overflow-hidden rounded-2xl border-border bg-card">
              <CardContent className="p-4">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 bg-background border-border text-white placeholder:text-muted-foreground"
                  />
                  <Button
                    type="submit"
                    className="
                      inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl
                      bg-primary px-4 text-sm font-semibold text-white
                      transition-all duration-200
                      hover:bg-primary/90
                      active:scale-[0.98]"

                  >
                    Subscribe
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <Separator className="mt-16 bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-[#5F5F5F]">
            &copy; 2026 RaceX. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[#5F5F5F] transition-colors duration-200 hover:text-muted-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#5F5F5F] transition-colors duration-200 hover:text-muted-foreground"
            >
              Terms
            </Link>
          </div>

          <p className="flex items-center gap-1 text-xs text-[#5F5F5F]">
            Made with
            <Heart className="h-3 w-3 text-primary" />
            for Formula 1 fans.
          </p>
        </div>
      </div>
    </footer>
  );
}