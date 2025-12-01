import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function SidebarLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-96 h-screen bg-[#0a0e27] px-6 md:px-8 py-12 md:py-20 flex flex-col justify-between overflow-y-auto">
        {/* Top Section */}
        <div className="space-y-8">
          {/* Intro */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] tracking-tight">
                Jason James Moore
              </h1>
              <h2>Full-stack developer</h2>
              <p className="text-[#8892b0] text-sm leading-relaxed">
                 building custom software. Available for full-time and contract work.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-2">
              <Link href="/projects" className="px-4 py-2 border border-[#64ffda] text-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] transition rounded text-sm">
                View Work
              </Link>
              <Link href="/contact" className="px-4 py-2 border border-[#8892b0] text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] transition rounded text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3 text-sm border-t border-[rgba(136,146,176,0.1)] pt-8">
            <Link href="/about" className="block text-[#8892b0] hover:text-[#64ffda] transition">
              About
            </Link>
            <Link href="/projects" className="block text-[#8892b0] hover:text-[#64ffda] transition">
              Projects
            </Link>
            <Link href="/contact" className="block text-[#8892b0] hover:text-[#64ffda] transition">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Section - Social */}
        <div className="space-y-4 border-t border-[rgba(136,146,176,0.1)] pt-8 hidden md:block">
          <p className="text-xs text-[#8892b0] uppercase tracking-wide">Social</p>
          <div className="flex gap-4 text-sm">
            <a href="https://github.com/jasonjamesmoore" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jasonjamesmoore" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition">
              LinkedIn
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-96 bg-[#0a0e27] pt-12 md:pt-20">
        {children}
      </main>
    </div>
  );
}
