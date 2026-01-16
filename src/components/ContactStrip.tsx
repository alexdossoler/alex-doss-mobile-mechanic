import { Phone, Clock, MapPin } from "lucide-react";

export default function ContactStrip() {
  return (
    <section id="contact" className="bg-zinc-100 border-y border-zinc-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
          <div className="flex items-center gap-4 px-6 py-6">
            <div className="rounded-full bg-zinc-800 p-3 text-white">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-zinc-900">Text / Call</div>
              <a href="sms:+14072345863" className="text-2xl font-extrabold text-zinc-900 hover:underline">(407) 234-5863</a>
              <div className="mt-1 text-sm italic text-zinc-600">Fast response by text</div>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-6">
            <div className="rounded-full bg-zinc-800 p-3 text-white">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-zinc-900">Hours</div>
              <div className="text-base font-semibold text-zinc-900">Mon—Sat</div>
              <div className="mt-1 text-sm italic text-zinc-600">Flexible scheduling available</div>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-6">
            <div className="rounded-full bg-zinc-800 p-3 text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-zinc-900">Service Area</div>
              <div className="text-base font-semibold text-zinc-900">Carolinas</div>
              <div className="mt-1 text-sm italic text-zinc-600">Charlotte / Rock Hill / Spartanburg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
