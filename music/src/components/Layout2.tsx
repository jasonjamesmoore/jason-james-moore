// END OF SCROLL LAYOUT
// import { Sidebar } from "@/components/ui/sidebar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Sheet } from "@/components/ui/sheet";
import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

// layout component

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({
  children,
  title = "Jason James Moore | Music",
  description = "Saxophonist, Composer, Educator",
}: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.25]);
  const y = useTransform(scrollY, [0, 300], [0, -160]);
  const glowScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const glowOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

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
        <header
          role="banner"
          className="fixed top-0 z-40 w-full px-6 py-4 bg-transparent"
        >
          <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-6 text-white text-sm font-medium">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-6 items-center">
                  <NavigationMenuItem>
                    <Link href="/contact">Contact</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/music">Music</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/lessons">Lessons</Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Center Logo */}
            <motion.div
              style={{ scale, y }}
              className="relative z-30 mx-10 w-[150px] h-[90px] md:w-[200px] md:h-[120px]"
            >
              <motion.div
                style={{ scale: glowScale, opacity: glowOpacity }}
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

            <div className="flex items-center gap-6 text-white text-sm font-medium">
              <Button className="text-sm font-medium bg-amber-200/70 text-black hover:bg-amber-200">
                Free Consultation
              </Button>
              <div className="flex gap-4 text-white text-xl">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="absolute bottom-0 z-20 w-full flex justify-center pb-6 text-md text-amber-200/80">
          © {new Date().getFullYear()} Jason James Moore. All rights reserved.
        </footer>
      </div>
    </>
  );
}