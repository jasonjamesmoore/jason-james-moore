import Head from 'next/head';

export default function LessonsPage() {
  return (
    <>
      <Head>
        <title>Saxophone Lessons | Jason James Moore</title>
        <meta name="description" content="Private saxophone lessons in Wilmington, NC with Jason James Moore." />
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold">Saxophone Lessons</h1>
        <p className="mt-4 text-lg">
          I offer private saxophone lessons for all ages and levels in Wilmington, NC.
        </p>
      </main>
    </>
  );
}
