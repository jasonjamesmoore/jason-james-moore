import Link from "next/link";

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[rgba(10,14,39,0.95)] backdrop-blur-md border-b border-[rgba(136,146,176,0.1)]">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between text-sm">
        {/* Logo */}
        <Link href="/" className="font-mono font-bold text-[#64ffda] hover:text-white transition">
          JJM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 text-[#8892b0]">
          <Link href="/about" className="hover:text-[#64ffda] transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-[#64ffda] transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#64ffda] transition">
            Contact
          </Link>
          <a href="https://github.com/jasonjamesmoore" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition">
            GitHub
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex gap-6 text-[#8892b0]">
          <Link href="/projects" className="hover:text-[#64ffda] transition">
            Work
          </Link>
          <Link href="/contact" className="hover:text-[#64ffda] transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
