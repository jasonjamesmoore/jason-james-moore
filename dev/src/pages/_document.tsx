import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jasonjamesmoore.com" />
        <meta property="og:title" content="Jason Moore - Full-Stack Developer" />
        <meta
          property="og:description"
          content="Full-stack portfolio featuring production subscription management system (Stripe + Next.js) and interactive music theory platform. Case studies with React 19, TypeScript 5, Next.js 16."
        />
        <meta property="og:image" content="https://jasonjamesmoore.com/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://jasonjamesmoore.com" />
        <meta name="twitter:title" content="Jason Moore - Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Full-stack portfolio featuring production subscription management system (Stripe + Next.js) and interactive music theory platform. Case studies with React 19, TypeScript 5, Next.js 16."
        />
        <meta name="twitter:image" content="https://jasonjamesmoore.com/og-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="description" content="Full-stack portfolio featuring production subscription management system (Stripe + Next.js) and interactive music theory platform. Case studies with React 19, TypeScript 5, Next.js 16." />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
