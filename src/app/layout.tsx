import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vivek Dhingra | AI / Systems Engineer",
  description:
    "AI + systems engineer blending causal reasoning, product shipping, and leadership.",
  metadataBase: new URL("https://relectrik.github.io"),
  openGraph: {
    title: "Vivek Dhingra | AI / Systems Engineer",
    description:
      "AI + systems engineer blending causal reasoning, product shipping, and leadership.",
    url: "https://relectrik.github.io",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${jetbrains.variable} bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-grid">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background to-background" />
            <SiteHeader />
            <main className="mx-auto max-w-6xl px-5 sm:px-8">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

