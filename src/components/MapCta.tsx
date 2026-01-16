export default function BottomCta() {
  return (
    <section id="bottom-cta" className="bg-gradient-to-b from-slate-800 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to schedule?</h2>
            <div className="mt-4 text-xl sm:text-2xl font-semibold">
              Text: <span className="font-extrabold">(407) 234-5863</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="sms:+14072345863"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500 transition"
              >
                Text Now
              </a>
              <a
                href="#services"
                className="rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Review Services
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg h-[280px] sm:h-[320px]">
            <iframe
              title="Service Area"
              className="h-full w-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=Charlotte%2C%20NC&output=embed"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-2 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Alex Doss Mobile Mechanic</div>
            <div>
              Text: <span className="font-semibold text-white/90">(407) 234-5863</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
