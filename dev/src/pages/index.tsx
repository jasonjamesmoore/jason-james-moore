import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 via-white to-slate-50 text-center px-6">
      <div className="space-y-6 max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Jason James Moore
        </h1>
        <h2 className="text-2xl text-gray-700 font-medium">
          Developer Portfolio Coming Soon
        </h2>
        <p className="text-gray-600">
          I'm currently building this space to showcase custom software projects,
          product design, and web development work.
        </p>
        <p className="text-sm text-gray-500">
          Want to connect now? Reach me at this <Link href="https://music.jasonjamesmoore.com/contact" className="underline">Contact Form</Link>
        </p>
      </div>
    </main>
  );
}
