import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Jason James Moore | Music & Software</title>
        <meta
          name="description"
          content="Saxophonist, Educator, Composer & Software Developer – choose your path."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative min-h-screen text-neutral-900 flex flex-col items-center justify-center px-6 overflow-hidden font-[Oswald]">
        {/* Background Texture */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background-texture.png"
            alt="Background Texture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* logo with glow div */}
        <div className="relative mb-1 flex items-center justify-center">
          {/* Radial Glow */}
          <div className="absolute inset-0 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-radial from-orange-400/40 via-red-500/20 to-transparent blur-3xl z-0 animate-fade-in-soft" />
          {/* Logo */}
          <Image
            src="/JJM-logo.png"
            alt="Jason James Moore Logo"
            width={650}
            height={390}
            className="drop-shadow-xl"
            priority
          />
        </div>
        {/* Tagline */}
        <h1 className="text-2xl md:text-3xl font-light text-center mb-6">
          Saxophonist • Educator • Composer • Software Developer
        </h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-6"
        >
          {/* Music Button */}
          <div className="relative group w-[450px] h-[245px] flex items-center justify-center">
            <motion.div
              className="absolute z-10 w-full h-full pointer-events-none"
              initial={{
                scale: 0.95,
                opacity: 1,
                filter: "blur(0px) saturate(100%)",
              }}
              animate={{
                scale: [0.65, 1],
                opacity: [0.9, 0.75, 0.65, 0.8],
                filter: [
                  "blur(0px) saturate(100%)",
                  "blur(1px) saturate(90%)",
                  "blur(2px) saturate(80%)",
                  "blur(1px) saturate(95%)",
                ],
              }}
              transition={{ delay: 0.6, duration: 8, ease: "easeInOut" }}
            >
              <Image
                src="/red-spot.png"
                alt="Red Spot"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.a
              href="https://music.jasonjamesmoore.com"
              className="relative z-20 px-6 py-3 text-2xl font-medium text-amber-300 text-shadow-md text-shadow-[#6f6658]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 4, ease: "easeOut", delay: 0.6 },
                y: { duration: 1.6, ease: "easeOut", delay: 0.4 },
              }}
            >
              Music & Teaching
            </motion.a>
          </div>

          {/* Dev Button */}
          <div className="relative group w-[450px] h-[245px] flex items-center justify-center">
            <motion.div
              className="absolute z-10 w-full h-full pointer-events-none"
              initial={{
                scale: 1,
                opacity: 0.9,
                filter: "blur(0px) saturate(100%)",
              }}
              animate={{
                scale: [0.6, 1],
                opacity: [0.9, 0.75, 0.65, 0.8],
                filter: [
                  "blur(0px) saturate(100%)",
                  "blur(1px) saturate(90%)",
                  "blur(2px) saturate(80%)",
                  "blur(1px) saturate(95%)",
                ],
              }}
              transition={{ delay: 1, duration: 8, ease: "easeInOut" }}
            >
              <Image
                src="/yellow-spot.png"
                alt="Yellow Spot"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.a
              href="https://dev.jasonjamesmoore.com"
              className="relative z-20 px-6 py-3 text-2xl font-medium text-amber-300 text-shadow-lg text-shadow-[#6f6658]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 4, ease: "easeOut", delay: 0.9 },
                y: { duration: 1.6, ease: "easeOut", delay: 0.4 },
              }}
            >
              Software
            </motion.a>
          </div>
        </motion.div>
      </main>
    </>
  );
}
