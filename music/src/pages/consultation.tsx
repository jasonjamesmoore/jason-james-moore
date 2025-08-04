import Head from "next/head";
import { useEffect, useRef } from "react";

export default function ConsultationPage() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedRef.current) return;

    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Free Saxophone Consultation | Jason James Moore</title>
        <meta
          name="description"
          content="Book a free consultation to explore saxophone lessons in Wilmington, NC or online."
        />
      </Head>

      <section className="px-6 py-20 [@media(min-width:795px)]:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-y-12 lg:gap-x-12">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl [@media(min-width:795px)]:text-6xl font-serif font-bold ">
              Chat with me
            </h1>
            <h2 className="text-2xl font-semibold text-neutral-800">
              Book a Free Consultation
            </h2>
            <p className="text-lg text-neutral-700">
              Tell me all about why you want to work on your saxophone skills.
              Whether you're a complete beginner or you've been playing in some
              form for your whole life, I’m excited to hear about what’s driving
              your decision to improve.
            </p>
          </div>

          {/* Right: TidyCal Embed */}
          <div className="w-full lg:w-1/2 max-w-xl overflow-hidden">
            <div
              ref={embedRef}
              className="tidycal-embed"
              data-path="moorejasonj/15-minute-meeting"
            />
          </div>
        </div>
      </section>
    </>
  );
}
