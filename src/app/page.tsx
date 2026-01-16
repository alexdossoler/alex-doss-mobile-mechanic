import Hero from "@/components/HeroSlider";
import ContactStrip from "@/components/ContactStrip";
import ServicesCards from "@/components/ServicesCards";
import StatementLine from "@/components/StatementTicker";
import MakesStrip from "@/components/BrandsCarousel";
import BottomCta from "@/components/MapCta";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ContactStrip />
      <ServicesCards />
      <StatementLine />
      <MakesStrip />
      <BottomCta />
    </main>
  );
}
