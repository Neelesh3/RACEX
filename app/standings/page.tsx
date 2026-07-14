import type { Metadata } from "next";
import { StandingsPage } from "@/components/standings/StandingsPage";

export const metadata: Metadata = {
  title: "F1 Championship Standings | RACEX",
  description:
    "Follow the live 2026 Formula One Championship standings, driver points gaps, win metrics, and constructor title battles.",
};

export default function Page() {
  return <StandingsPage />;
}