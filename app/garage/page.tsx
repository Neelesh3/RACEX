import { Garage } from "@/components/garage/Garage";

export const metadata = {
  title: "Constructor Garage | RaceX",
  description:
    "Immerse yourself in the premium 2.5D Constructor Garage. Explore Formula One cars, team statistics, and constructor details on a unified cinematic timeline.",
};

export default function GaragePage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Garage />
    </main>
  );
}
