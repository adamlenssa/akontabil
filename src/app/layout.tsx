import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const robotoCondensed = localFont({
  src: "./fonts/Roboto-Condensed-Regular.woff2",
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: { default: "Akontability", template: "%s | Akontability" },
  description: "You keep you accountable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} bg-light-shade-white dark:bg-dark-black`}
      >
        {children}
      </body>
    </html>
  );
}
