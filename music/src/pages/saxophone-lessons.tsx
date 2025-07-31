import Head from 'next/head';

export default function LessonsPage() {
  return (
    <>
      <Head>
        <title>Saxophone Lessons | Jason James Moore</title>
        <meta name="description" content="Private saxophone lessons in Wilmington, NC with Jason James Moore." />
      </Head>
      <main className="px-6 py-20 md:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold">Saxophone Lessons</h1>
        <p className="text-lg md:text-xl">
          I offer private saxophone lessons for all ages and levels in Wilmington, NC.
        </p>
        </div>
        </div>
      </main>
    </>
  );
}
