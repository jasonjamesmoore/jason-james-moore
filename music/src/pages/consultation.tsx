import Head from "next/head";

export default function ConsultationPage() {
  return (
    <>
      <Head>
        <title>Free Saxophone Consultation | Jason James Moore</title>
        <meta
          name="description"
          content="Book a free consultation to explore saxophone lessons in Wilmington, NC or online."
        />
      </Head>
      <main className="px-6 py-20 md:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              Chat with me
            </h1>
            <p className="text-lg md:text-xl">
              Tell me why you&apos;re ready to improve your saxophone skills...
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
