import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function StaticLayout({
  children,
  title = "Jason James Moore | Music",
  description = "Saxophonist, Composer, Educator",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative min-h-screen flex flex-col bg-background text-foreground">
        {/* Navigation */}
        <header
          role="banner"
          className="fixed top-0 z-40 w-full px-6 py-4 bg-neutral-900/80 backdrop-blur-md"
        >
          <div className="hidden md:flex items-center justify-center w-full max-w-7xl mx-auto gap-7">
            {/* Left Nav */}
            <div className="flex items-center gap-6 text-amber-200/70 text-xl font-medium">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-6 items-center">
                  <NavigationMenuItem>
                    <Link href="/contact">Contact</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/music">Music</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/saxophone-lessons">Lessons</Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Navbar Logo */}
            <div className="relative z-30 w-[150px] h-[90px] md:w-[200px] md:h-[120px] flex items-center justify-center">
              <Link href="/" className="block">
                <Image
                  src="/JJM-logo.png"
                  alt="Jason James Moore Logo"
                  width={200}
                  height={120}
                  className="relative z-10 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Right Nav */}
            <div className="flex items-center gap-6 text-xl font-medium">
              <div className="pl-2">
                <Button className="text-lg font-medium bg-amber-200/70 text-black hover:bg-amber-200">
                  <Link href="/consultation">Free Consultation</Link>
                </Button>
              </div>
              <div className="flex gap-4 text-amber-200/70 text-xl">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-200"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-200"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-200"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col items-center gap-4">
            <Link href="/">
              <Image
                src="/JJM-logo.png"
                alt="Jason James Moore Logo"
                width={150}
                height={90}
                className="object-contain"
                priority
              />
            </Link>
            <div className="flex gap-4 text-sm font-medium text-amber-200">
              <Link href="/contact">Contact</Link>
              <Link href="/music">Music</Link>
              <Link href="/saxophone-lessons">Lessons</Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-28">{children}</main>

        {/* Footer */}
        <footer className="py-10 px-6 md:px-12 bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-800 text-muted-foreground">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-md">
              &copy; {new Date().getFullYear()} Jason James Moore. All rights reserved.
            </p>
            <div className="flex gap-4 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
            <Button
              asChild
              className="text-base font-medium bg-amber-200/70 text-black hover:bg-amber-200"
            >
              <Link href="/consultation">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
}
