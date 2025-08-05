import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* Favicons */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/JJM-Favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/JJM-Favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/JJM-Favicon-180x180.png"
      />
      {/*Default*/}
      <link rel="shortcut icon" href="/JJM-Favicon-32x32.png" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
