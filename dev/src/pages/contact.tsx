import Link from "next/link";
import { AppLayout } from "@/components/AppLayout";

export default function Contact() {
  return (
    <AppLayout>
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-3xl space-y-12">
          {/* Intro */}
          <section className="space-y-6">
            <h1 className="text-[#ccd6f6]">Get in Touch</h1>
            <p className="text-lg text-[#8892b0]">
              I'm always interested in hearing about new opportunities, projects, or just connecting.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="space-y-8 border-t border-[rgba(136,146,176,0.1)] pt-16">
            {/* Email */}
            <div className="space-y-3">
              <h3 className="text-[#64ffda] font-mono text-sm">Email</h3>
              <p className="text-[#8892b0]">
                Fastest way to reach me for anything.
              </p>
              <a href="mailto:jason@jasonjamesmoore.com" className="inline-block text-[#64ffda] hover:underline">
                jason@jasonjamesmoore.com
              </a>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <h3 className="text-[#64ffda] font-mono text-sm">Social</h3>
              <p className="text-[#8892b0]">
                Connect on LinkedIn or check out my code.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/jasonjamesmoore" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/jasonjamesmoore" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <h3 className="text-[#64ffda] font-mono text-sm">Contact Form</h3>
              <p className="text-[#8892b0]">
                Prefer a form? I have one on my music site.
              </p>
              <Link href="https://music.jasonjamesmoore.com/contact" target="_blank" className="inline-block text-[#64ffda] hover:underline">
                Open Form →
              </Link>
            </div>
          </section>

          {/* Response */}
          <section className="border-t border-[rgba(136,146,176,0.1)] pt-16">
            <p className="text-[#8892b0]">
              I try to respond to all inquiries within 24 hours. Looking forward to connecting!
            </p>
          </section>
        </section>
    </AppLayout>
  );
}
