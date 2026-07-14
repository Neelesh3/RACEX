export const metadata = {
  title: "About RACEX | Premium Formula One Portfolio",
  description:
    "Discover the engineering and philosophy behind the RACEX digital showcase. Experience the intersection of advanced frontend development and Formula One aesthetics.",
};

export default function AboutPage() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] w-full bg-[#050505] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle background tech line and glows */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(225,6,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(225,6,0,0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-[#E10600]/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl w-full text-center sm:text-left">
        {/* Category Header */}
        <span className="text-xs font-black tracking-[0.25em] text-[#E10600] uppercase">
          PROJECT REVEAL
        </span>

        {/* Page Title */}
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          About <span className="text-[#E10600]">RACEX</span>
        </h1>

        {/* Project Philosophy Card */}
        <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-300">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E10600] pl-3">
            Experience Before Information
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#B5B5B5]">
            RACEX is a premium, high-fidelity digital showcase celebrating the engineering,
            athleticism, and aesthetics of modern Formula One. Decoupled from generic CMS data
            and repetitive layouts, the project focuses on interactive visual experiences: full-bleed
            cinematic Three.js simulation canvasses and clean, transition-locked 2.5D animation interfaces.
          </p>
        </div>

        {/* Tech Stack Metrics */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 text-center">
            <span className="text-2xl font-black text-white">Three.js</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#808080] mt-1">
              3D Real-Time Render
            </span>
          </div>
          <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 text-center">
            <span className="text-2xl font-black text-white">Next.js 16</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#808080] mt-1">
              Production Architecture
            </span>
          </div>
          <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 text-center">
            <span className="text-2xl font-black text-white">60 FPS</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#808080] mt-1">
              Animation Targets
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
