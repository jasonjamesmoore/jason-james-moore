// src/components/Hero.tsx

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/sax-hero.jpeg"
        alt="Saxophone performance"
        fill
        className="object-cover object-[center_43%]"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />

      {/* Text Block aligned to logo center */}
      <div className="absolute top-[calc(8%+440px)] left-[5%] w-[700px] max-w-full z-10 px-6">
        <h1 className="text-2xl text-amber-200/70 text-center">
          Saxophonist • Composer • Educator
        </h1>
      </div>
    </section>
  );
}
