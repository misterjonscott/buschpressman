// app/components/Hero.tsx
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      id="home"
      className="section-container relative min-h-screen bg-[url('/images/hero-bg.webp')] bg-cover bg-center flex items-center justify-center text-white text-center p-5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-1 space-y-4">
        <h1 className="pacifico-font text-2xl md:text-6xl">
          Have you ever had a dream?
        </h1>
        <p className="text-md md:text-lg max-w-[600px] mx-auto">
          that you, um, you had, your, you- you could, you&apos;ll do, you- you wants, you, you could do so, you- you&apos;ll do, you could- you, you want, you want them to do you so much you could do anything?
        </p>
        <Button size="lg" className="mx-auto">I Fricken Have</Button>
      </div>
    </div>
  );
};

export default Hero;
