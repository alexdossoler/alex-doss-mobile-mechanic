const makes = ["Audi", "BMW", "Ford", "Toyota", "Honda", "GMC"];

export default function MakesStrip() {
  return (
    <section className="bg-zinc-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-center text-zinc-900">Makes We Commonly See</h2>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-white shadow-sm px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {makes.map((m) => (
              <div
                key={m}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-6 py-2 text-sm font-semibold text-zinc-600"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
