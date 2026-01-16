const boxes = [
  { title: "No-Start / Stalling", bullets: ["Fuel / spark checks", "Starter + battery testing", "Scan + data review"] },
  { title: "Warning Lights", bullets: ["Check engine light", "ABS / traction", "Charging system"] },
  { title: "Maintenance", bullets: ["Oil & filters", "Spark plugs", "Belts / hoses"] },
];

export default function InteractiveBoxes() {
  return (
    <section className="bg-zinc-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">What We&apos;re Great At</h2>
        <p className="mt-2 text-zinc-600">
          Interactive boxes feel from the theme — clean cards with bullet points.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {boxes.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <div className="text-lg font-semibold">{b.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {b.bullets.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-5 inline-block text-sm font-semibold text-zinc-900">
                Ask about this →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
