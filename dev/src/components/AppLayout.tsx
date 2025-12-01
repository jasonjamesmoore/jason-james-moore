"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Github, Linkedin } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "tech",
  ]);

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-12 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Header/Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 pb-12">
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <Link href="/" className="inline-block">
                    <h1 className="text-4xl font-bold text-[#fafafa] leading-none sm:text-5xl">
                      Jason James Moore
                    </h1>
                  </Link>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Full-stack developer
                  </h2>
                  <p className="mt-4 max-w-xs text-[#9ca3af] leading-normal">
                    I create intuitive, durable tools that make complex
                    workflows feel simple.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-[#10b981] hover:text-[#fafafa] transition-colors group"
                  >
                    <span>Get in touch</span>
                    <span className="text-[#fb923c] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Navigation - In-page jump links */}
              <nav className="hidden lg:block space-y-1 pt-8">
                <Link
                  href="/#about"
                  className={`group flex items-start gap-2 py-3 transition-all duration-300 ${
                    activeSection === "about"
                      ? "pl-4 text-[#10b981] font-bold"
                      : "pl-0 text-[#9ca3af] hover:pl-2 hover:text-[#fafafa]"
                  }`}
                >
                  <span
                    className={`text-xs text-[#fb923c] transition-opacity duration-300 ${
                      activeSection === "about" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                      activeSection === "about"
                        ? "scale-105"
                        : "scale-100 group-hover:scale-102"
                    } inline-block`}
                  >
                    About
                  </span>
                </Link>

                <Link
                  href="/#experience"
                  className={`group flex items-start gap-2 py-3 transition-all duration-300 ${
                    activeSection === "experience"
                      ? "pl-4 text-[#10b981] font-bold"
                      : "pl-0 text-[#9ca3af] hover:pl-2 hover:text-[#fafafa]"
                  }`}
                >
                  <span
                    className={`text-xs text-[#fb923c] transition-opacity duration-300 ${
                      activeSection === "experience"
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                      activeSection === "experience"
                        ? "scale-105"
                        : "scale-100 group-hover:scale-102"
                    } inline-block`}
                  >
                    Experience
                  </span>
                </Link>

                <Link
                  href="/#projects"
                  className={`group flex items-start gap-2 py-3 transition-all duration-300 ${
                    activeSection === "projects"
                      ? "pl-4 text-[#10b981] font-bold"
                      : "pl-0 text-[#9ca3af] hover:pl-2 hover:text-[#fafafa]"
                  }`}
                >
                  <span
                    className={`text-xs text-[#fb923c] transition-opacity duration-300 ${
                      activeSection === "projects" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                      activeSection === "projects"
                        ? "scale-105"
                        : "scale-100 group-hover:scale-102"
                    } inline-block`}
                  >
                    Projects
                  </span>
                </Link>

                <Link
                  href="/#tech"
                  className={`group flex items-start gap-2 py-3 transition-all duration-300 ${
                    activeSection === "tech"
                      ? "pl-4 text-[#10b981] font-bold"
                      : "pl-0 text-[#9ca3af] hover:pl-2 hover:text-[#fafafa]"
                  }`}
                >
                  <span
                    className={`text-xs text-[#fb923c] transition-opacity duration-300 ${
                      activeSection === "tech" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                      activeSection === "tech"
                        ? "scale-105"
                        : "scale-100 group-hover:scale-102"
                    } inline-block`}
                  >
                    Tech
                  </span>
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-12 lg:mt-0">
              <Link
                href="https://github.com/jasonjamesmoore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#9ca3af] hover:text-[#10b981] transition"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/jason-james-moore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#9ca3af] hover:text-[#10b981] transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="lg:w-[52%] pt-12 md:pt-20 lg:py-24">{children}</main>
        </div>
      </div>
    </div>
  );
}
