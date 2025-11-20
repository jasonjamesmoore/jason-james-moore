import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ParkingCircle } from "lucide-react";

type SectionProps = {
  id?: string;
};

export default function SaxophoneLessonsWilmington({ id }: SectionProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jasonjamesmoore.com/saxophone-lessons-wilmington",
    name: "Jason James Moore - Saxophone Lessons Wilmington NC",
    description:
      "Private saxophone lessons in Wilmington, NC at Northchase studio. Expert instruction for all ages and skill levels.",
    image: "/JasonBW.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wilmington",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Wilmington", state: "NC" },
      { "@type": "City", name: "Wrightsville Beach", state: "NC" },
      { "@type": "City", name: "Carolina Beach", state: "NC" },
    ],
    serviceType: "Saxophone Lessons",
    offers: {
      "@type": "Offer",
      name: "Private Saxophone Lessons - In-Studio",
      priceCurrency: "USD",
      description:
        "1-on-1 private saxophone lessons at studio in Wilmington, NC",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "5",
    },
  };

  return (
    <>
      <Head>
        <title>
          Saxophone Lessons Wilmington NC | Private In-Studio Instruction
        </title>
        <meta
          name="description"
          content="Expert private saxophone lessons in Wilmington, NC at Northchase. All ages and skill levels. Experienced instruction with easy parking. Book your first lesson today."
        />
        <meta
          name="keywords"
          content="saxophone lessons Wilmington NC, saxophone instructor, private lessons, in-studio"
        />
        <meta
          property="og:title"
          content="Saxophone Lessons Wilmington NC | Jason James Moore"
        />
        <meta
          property="og:description"
          content="Private saxophone instruction in Wilmington, NC. All ages and skill levels welcome."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://jasonjamesmoore.com/saxophone-lessons-wilmington"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <section className="bg-gradient-to-b from-white via-indigo-50 to-indigo-100 text-foreground pb-8">
        <div className="pt-20 px-6 md:px-12">
        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          {/* Left text content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl text-center font-serif font-bold">
              Saxophone Lessons in Wilmington, NC
            </h1>
            <div className="flex justify-center gap-2">
              <Link
                href="/consultation"
                className="inline-block bg-amber-200/70 text-slate-700 hover:bg-amber-200 font-bold py-3 px-6 rounded-lg transition text-2xl"
              >
                Schedule a Call with Me
              </Link>
            </div>
            <ul className="list-disc list-inside text-lg text-neutral-700 space-y-1">
              <li>1:1 Private Lessons</li>
              <li>Group Classes</li>
              <li>Monthly Mentorship</li>
            </ul>
            <p className="text-lg">
              I teach saxophone lessons at my home studio in Wilmington, NC and
              over the internet via Zoom. These lessons are for you if you are:
            </p>
            <ul className="list-disc list-inside text-lg text-neutral-700 space-y-1">
              <li>
                <strong>Ready</strong> to jump right into ongoing, meaningful
                lessons.
              </li>
              <li>
                <strong>Curious</strong> about growing as a musician with
                reflection and support.
              </li>
              <li>
                <strong>Motivated</strong> to practice and see progress between
                sessions.
              </li>
              <li>
                <strong>Interested</strong> in building confidence and playing
                with others.
              </li>
            </ul>
            
          </div>

          {/* Right image */}
          <div className="w-full flex justify-center overflow-hidden">
            <Image
              src="/JasonBW.jpeg"
              alt="Jason James Moore playing saxophone in Wilmington NC studio"
              className="rounded-lg shadow-lg object-cover max-w-sm w-full"
              width={903}
              height={1208}
            />
          </div>
        </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-8 bg-indigo-100">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />
      </div>

      {/* Why In-Studio Lessons */}
      <section
        id={id}
        className="py-20 px-6 bg-gradient-to-b from-indigo-100 via-rose-100 to-white text-black [@media(min-width:795px)]:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl [@media(min-width:795px)]:text-5xl font-bold text-center mb-16">
            Why Choose In-Studio Lessons in Wilmington?
          </h2>
          <div className="grid [@media(min-width:795px)]:grid-cols-2 divide-y [@media(min-width:795px)]:divide-y-0 divide-neutral-300">
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-4 [@media(min-width:795px)]:border-r [@media(min-width:795px)]:border-neutral-300">
              <h3 className="text-xl [@media(min-width:795px)]:text-2xl font-bold">
                One-on-One Attention
              </h3>
              <p className="text-md [@media(min-width:795px)]:text-lg text-neutral-700">
                Direct feedback on your tone, technique, and posture. I can
                demonstrate concepts on my instrument and provide immediate
                corrections to help you progress faster.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-4">
              <h3 className="text-xl [@media(min-width:795px)]:text-2xl font-bold">
                Dedicated Studio Space
              </h3>
              <p className="text-md [@media(min-width:795px)]:text-lg text-neutral-700">
                Professional studio environment in the Northchase area with
                excellent acoustics. Easy parking makes it convenient to access.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-4 [@media(min-width:795px)]:border-r [@media(min-width:795px)]:border-neutral-300">
              <h3 className="text-xl [@media(min-width:795px)]:text-2xl font-bold">
                Local Community Connection
              </h3>
              <p className="text-md [@media(min-width:795px)]:text-lg text-neutral-700">
                Connect with other saxophone students in Wilmington.
                Opportunities to perform together and build relationships with
                local musicians.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-4">
              <h3 className="text-xl [@media(min-width:795px)]:text-2xl font-bold">
                Consistent Routine
              </h3>
              <p className="text-md [@media(min-width:795px)]:text-lg text-neutral-700">
                Weekly recurring lessons in a dedicated space help establish
                routine and maximize practice effectiveness between sessions.
              </p>
            </div>
          </div>
        </div>
        {/* Studio Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0 mt-12 divide-x">
          <div className="flex gap-4 justify-center">
            <MapPin className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Studio Location</h3>
              <p className="text-muted-foreground">
                Northchase area <br />
                Wilmington, NC
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Clock className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-muted-foreground">
                By appointment
                <br />
                Flexible scheduling
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <ParkingCircle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Parking</h3>
              <p className="text-muted-foreground">
                Easy parking
                <br />
                Available for all students
              </p>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="my-20 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Ready to Start Your Saxophone Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your musical goals and book your
            first lesson at my Wilmington studio.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-amber-200/70 text-slate-700 hover:bg-amber-200 text-2xl font-bold py-3 px-6 rounded-lg transition"
          >
            Get Started Today
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl [@media(min-width:795px)]:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">
                Where in Wilmington are lessons held?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                My studio is located in the Northchase area of Wilmington, most convenient to Landfall, Porters Neck, and Mayfaire. The studio offers a professional environment and easy parking.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                Do you teach students from Wrightsville Beach?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! I regularly teach students from Wrightsville Beach, Carolina Beach, and surrounding coastal areas. The location is easily accessible from the beach communities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                Is parking available at your Wilmington studio?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, there is easy, convenient parking available.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                Do you offer online lessons for students outside Wilmington?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! If you're not in the Wilmington area, I offer high-quality online saxophone lessons via Zoom. Learn more on my{" "}
                <Link href="/saxophone-lessons" className="text-amber-600 hover:text-amber-700 underline">
                  saxophone lessons page
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
