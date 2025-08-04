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

// // src/components/Hero.tsx

// import Image from "next/image";

// export function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/sax-hero.jpeg"
//         alt="Saxophone performance"
//         fill
//         className="object-cover object-[center_43%]"
//       />

//       {/* Overlay gradient for edge fading */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />

//       {/* Content: ONLY Text Now */}
//       <div className="absolute top-[8%] left-[5%] z-10 text-white text-center px-6 animate-fade-in-up">
//         <div className="relative flex flex-col items-center justify-center">
//           {/* Just the text, no logo or glow */}
//           <p className="text-2xl z-10 text-amber-200/70">
//             Saxophonist • Composer • Educator
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// // src/components/Hero.tsx

// import Image from "next/image";

// export function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/sax-hero.jpeg"
//         alt="Saxophone performance"
//         fill
//         className="object-cover object-[center_43%]"
//       />
//       {/* Overlay gradient for edge fading */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
//       {/* Content */}
//       <div className="absolute top-[8%] left-[5%] z-10 text-white text-center px-6 animate-fade-in-up">
//         <div className="relative flex flex-col items-center justify-center">
//           {/* Radial Glow Behind Content */}
//           {/* <div className="absolute inset-0 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-radial from-orange-400/60 via-red-500/20 to-transparent blur-3xl z-0 animate-fade-in-soft" /> */}

//           {/* Logo */}
//           {/* <Image
//             src="/JJM-logo.png"
//             alt="Jason James Moore Logo"
//             width={400}
//             height={240}
//             className="object-contain drop-shadow-[0_1px_2px_rgba(103,140,232,1.000)] md:w-[700px] md:h-[420px] relative z-10"
//             priority
//           /> */}

//           {/* Text */}
//           <p className="text-2xl relative z-10 text-amber-200/70">
//             Saxophonist • Composer • Educator
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
