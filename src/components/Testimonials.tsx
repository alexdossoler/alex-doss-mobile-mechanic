"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const quotes = [
  { name: "Customer A", text: "Showed up on time, diagnosed fast, and fixed it without upselling." },
  { name: "Customer B", text: "Clear communication and fair pricing. Saved me a tow." },
  { name: "Customer C", text: "Professional tools and real troubleshooting. Highly recommend." },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <p className="mt-2 text-zinc-600">Short slider like the theme demo.</p>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop>
            {quotes.map((q) => (
              <SwiperSlide key={q.name}>
                <div className="text-lg font-semibold">&ldquo;{q.text}&rdquo;</div>
                <div className="mt-3 text-sm text-zinc-600">— {q.name}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
