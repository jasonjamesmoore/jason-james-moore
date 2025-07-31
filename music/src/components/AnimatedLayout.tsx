import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function AnimatedLayout({
  children,
  title = "Jason James Moore | Music",
  description = "Saxophonist, Composer, Educator",
}: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollY } = useScroll();
  const heroLogoScale = useTransform(scrollY, [0, 300], [1, 0.25]);
  const heroLogoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroLogoY = useTransform(scrollY, [0, 300], [0, -160]);
  const heroGlowScale = useTransform(scrollY, [0, 300], [0.8, 0]);
  const heroGlowOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const navLogoOpacity = useTransform(scrollY, [100, 250], [0, 1]);
  const navLogoScale = useTransform(scrollY, [100, 250], [0.3, 1]);
  const navLogoGlowScale = useTransform(scrollY, [0, 300], [0, 0.4]);
  const navLogoGlowOpacity = useTransform(scrollY, [0, 300], [0, 1]);
  const navShift = useTransform(scrollY, [100, 250], [-125, 1]);
  const navShiftNeg = useTransform(scrollY, [100, 250], [125, -1]);
  const navBgOpacity = useTransform(scrollY, [500, 820], [0, 0.8]);
  const navBlur = useTransform(scrollY, [500, 820], [0, 8]); // px of blur
  const navBackground = useTransform(
    navBgOpacity,
    (o) => `rgba(23, 23, 23, ${o})`
  );
  const navBlurFilter = useTransform(navBlur, (b) => `blur(${b}px)`);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative min-h-screen flex flex-col bg-background text-foreground">
        {/* Navigation */}

        <motion.header
          role="banner"
          style={{
            backgroundColor: navBackground, // neutral-900 base
            backdropFilter: navBlurFilter,
            WebkitBackdropFilter: navBlurFilter, // for Safari
          }}
          className="fixed top-0 z-40 w-full px-6 py-4 transition-all duration-300"
        >
          <div className="hidden md:flex items-center justify-center w-full max-w-7xl mx-auto gap-7">
            {/* Left Nav */}
            <motion.div style={{ x: navShiftNeg }}>
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
            </motion.div>

            {/* Navbar Logo */}
            <motion.div
              style={{ scale: navLogoScale, opacity: navLogoOpacity }}
              className="relative z-30 w-[150px] h-[90px] md:w-[200px] md:h-[120px] flex items-center justify-center"
            >
              <motion.div
                style={{
                  scale: navLogoGlowScale,
                  opacity: navLogoGlowOpacity,
                }}
                className="absolute left-1/2 top-1/2 w-[400px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-orange-400/60 via-red-500/20 to-transparent blur-3xl z-0 pointer-events-none"
              />
              <Link href="/" className="block">
                <Image
                  src="/JJM-logo.png"
                  alt="Jason James Moore Logo"
                  width={200}
                  height={120}
                  className="relative z-10 object-contain drop-shadow-[0_1px_2px_rgba(103,140,232,1.000)]"
                  priority
                />
              </Link>
            </motion.div>

            {/* Right Nav */}
            <motion.div style={{ x: navShift }}>
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
            </motion.div>
          </div>

          {/* Mobile (simple static layout) */}
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

          {/* Hero Logo */}
          <motion.div
            style={{
              scale: heroLogoScale,
              y: heroLogoY,
              opacity: heroLogoOpacity,
            }}
            className="hidden md:block fixed top-[8%] left-[5%] z-10 w-[400px] h-[240px] md:w-[700px] md:h-[420px] pointer-events-none"
          >
            <motion.div
              style={{ scale: heroGlowScale, opacity: heroGlowOpacity }}
              className="absolute left-1/2 top-1/2 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-orange-400/60 via-red-500/20 to-transparent blur-3xl z-0 pointer-events-none"
            />
            <div className="relative z-0 pointer-events-none">
              <Image
                src="/JJM-logo.png"
                alt="Jason James Moore Logo"
                width={700}
                height={420}
                className="object-contain drop-shadow-[0_1px_2px_rgba(103,140,232,1.000)]"
                priority
              />
            </div>
          </motion.div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="py-10 px-6 md:px-12 bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-800 text-muted-foreground">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            {/* Left: Copyright */}
            <p className="text-md">
              &copy; {new Date().getFullYear()} Jason James Moore. All rights
              reserved.
            </p>

            {/* Center: Social Icons */}
            <div className="flex gap-4 text-xl">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Right: CTA Button */}
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
