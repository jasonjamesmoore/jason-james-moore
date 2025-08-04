import { ContactForm } from "@/components/ContactForm";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Jason James Moore | Saxophone Instructor Wilmington NC & Online</title>
        <meta
          name="description"
          content="Have questions or ready to book lessons? Contact Wilmington’s experienced saxophone teacher, Jason James Moore, today."
        />
      </Head>
      <section className="px-6 py-20 [@media(min-width:795px)]:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl [@media(min-width:795px)]:text-6xl font-serif font-bold">
              Contact Me.
            </h1>
            <p className="text-lg [@media(min-width:795px)]:text-xl">
              I'd love to hear about why you're interested in playing the
              saxophone or studying creative approaches to music making. I am
              happy to entertain any questions you might have about saxophone,
              music <br /> or creative practice in general.
            </p>
            <p className="text-lg [@media(min-width:795px)]:text-xl">
              I'd love to meet you. I encourage you to sign up for a short
              meeting with me through the consultation buttons above and below.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
