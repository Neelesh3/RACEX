export default function Home() {
  return (
    <div className="h-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Placeholder content to demonstrate navbar */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome to RaceX
            </h1>
            <p className="mt-4 text-muted-foreground">
              The premium Formula 1 platform for enthusiasts and professionals.
            </p>
          </div>

          {/* Content sections to test scrolling */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="text-xl font-semibold text-white">Section {i}</h2>
              <p className="mt-2 text-muted-foreground">
                Scroll down to see the navbar glassmorphism effect
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}