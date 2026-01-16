import { Wrench, ShieldCheck, Gauge } from "lucide-react";
import { LucideIcon } from "lucide-react";

type ServiceCardItem = {
  title: string;
  desc: string;
  Icon: LucideIcon;
};

const items: ServiceCardItem[] = [
  {
    title: "No-Start / Stalling",
    desc: "Crank/no start, stalls, intermittent issues.",
    Icon: Gauge,
  },
  {
    title: "Brakes",
    desc: "Pads/rotors, noise, vibration, pull diagnosis.",
    Icon: ShieldCheck,
  },
  {
    title: "Check Engine Light",
    desc: "Misfires, sensors, driveability diagnostics.",
    Icon: Wrench,
  },
];

export default function ServicesCards() {
  return (
    <section id="services" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-extrabold text-zinc-900">Common Services</h2>
          <p className="sm:ml-4 text-zinc-600">Dependable repairs - on your terms.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm"
            >
              {/* Faded icon area on right */}
              <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-white/70 to-transparent" />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-900/20">
                <Icon className="h-24 w-24" />
              </div>

              <div className="relative p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white p-2.5 text-zinc-900 shadow-sm border border-zinc-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xl font-extrabold text-zinc-900">{title}</div>
                </div>

                <p className="mt-4 max-w-[22rem] text-sm text-zinc-600">{desc}</p>

                <div className="mt-6 pt-4 border-t border-zinc-200">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Get pricing <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
