import Link from "next/link";
import { AppLayout } from "@/components/AppLayout";

export default function About() {
  return (
    <AppLayout>
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-3xl space-y-12">
          {/* Intro */}
          <section className="space-y-6">
            <h1 className="text-[#ccd6f6]">About</h1>
            <p className="text-lg text-[#8892b0] leading-relaxed">
              I'm a full-stack developer with a passion for building software that solves real problems. I approach each project with a focus on clean code, thoughtful architecture, and delivering solutions that actually work.
            </p>
          </section>

          {/* Background */}
          <section className="space-y-6 border-t border-[rgba(136,146,176,0.1)] pt-16">
            <h2 className="text-[#ccd6f6]">Background</h2>
            <p className="text-[#8892b0] leading-relaxed">
              Beyond coding, I'm also a working musician and saxophone educator. This background gives me a unique perspective on building tools for creative professionals and understanding how technology can enhance human capability.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="space-y-6 border-t border-[rgba(136,146,176,0.1)] pt-16">
            <h2 className="text-[#ccd6f6]">Tech I Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "Framer Motion", "REST APIs", "Web Audio", "Git"].map((tech) => (
                <div key={tech} className="px-4 py-2 border border-[rgba(136,146,176,0.3)] rounded text-[#8892b0] text-sm font-mono">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Status */}
          <section className="space-y-6 border-t border-[rgba(136,146,176,0.1)] pt-16">
            <h2 className="text-[#ccd6f6]">Currently</h2>
            <p className="text-[#8892b0] leading-relaxed">
              <strong className="text-[#64ffda]">Available for full-time and contract work.</strong> I'm actively building in public and shipping code. Whether you need a developer for a long-term role or have a specific project, I'd love to talk about what you're building.
            </p>
          </section>

          {/* CTA */}
          <section className="space-y-4 border-t border-[rgba(136,146,176,0.1)] pt-16">
            <p className="text-[#8892b0]">Let's connect:</p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://github.com/jasonjamesmoore" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">
                GitHub
              </a>
              <a href="https://linkedin.com/in/jasonjamesmoore" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">
                LinkedIn
              </a>
              <Link href="/contact" className="text-[#64ffda] hover:underline">
                Contact
              </Link>
            </div>
          </section>
        </section>
    </AppLayout>
  );
}
