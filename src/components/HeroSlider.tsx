export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />
      {/* Dark overlay for readable copy */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="relative py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="text-white">
              <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/80">
                ALEX DOSS MOBILE MECHANIC
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                Mobile Mechanic —
                <br />
                Diagnostics &amp; Repairs at Your Location
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl">
                No tow. No guessing. Clear next steps after diagnosis.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="sms:+14072345863"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-zinc-100 transition"
                >
                  Text to Schedule
                </a>
                <a
                  href="#services"
                  className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
                >
                  View Common Repairs
                </a>
              </div>

              <div className="mt-8 text-sm font-semibold text-white/80">
                Serving: Charlotte / Rock Hill / Spartanburg
              </div>
            </div>

            {/* What to text box (desktop only) */}
            <div className="hidden md:block">
              <div className="ml-auto max-w-md overflow-hidden rounded-xl border border-white/20 bg-white/80 shadow-lg">
                <div className="p-5">
                  <div className="text-lg font-bold text-zinc-900">What to text us</div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                    <li>• Address / ZIP + best time window</li>
                    <li>• Year / make / model + symptoms</li>
                    <li>• Any codes (if you have them)</li>
                    <li>• Photos/video if relevant</li>
                  </ul>
                </div>
                <div className="bg-zinc-900/60 px-5 py-4 text-white">
                  <div className="text-sm font-semibold">Example:</div>
                  <div className="mt-1 text-sm text-white/95">
                    &ldquo;2009 Honda Accord. Cranks but won&apos;t start. Charlotte. Tuesday morning&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
