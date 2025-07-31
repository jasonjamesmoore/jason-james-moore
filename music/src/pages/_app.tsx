import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import AnimatedLayout from "@/components/AnimatedLayout";
import SimpleLayout from "@/components/StaticLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const Layout = isHome ? AnimatedLayout : SimpleLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
