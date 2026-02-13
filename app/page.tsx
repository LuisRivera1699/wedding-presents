import { Hero } from "@/components/Hero";
import { ExplanatorySection } from "@/components/ExplanatorySection";
import { GiftsSection } from "@/components/GiftsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExplanatorySection />
      <GiftsSection />
    </div>
  );
}
