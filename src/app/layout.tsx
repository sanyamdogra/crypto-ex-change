import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";

import Header from "@/components/Header";

import "@radix-ui/themes/styles.css";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-space-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "crypto ex|change app",
  description: "A web app to manage crypto exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable}`}>
        <Theme appearance="dark" accentColor="blue">
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
