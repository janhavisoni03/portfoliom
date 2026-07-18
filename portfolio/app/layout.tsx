import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { PERSONAL } from "@/lib/constants";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://manvendrachaturvedi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PERSONAL.name} | ${PERSONAL.role}`,
    template: `%s | ${PERSONAL.name}`,
  },
  description: PERSONAL.summary,
  keywords: [
    "Food Safety",
    "Quality Assurance",
    "HACCP",
    "FSMS",
    "FSSC 22000",
    "ISO 22000",
    "FSSAI",
    "Quality Control",
    "Manvendra Chaturvedi",
  ],
  authors: [{ name: PERSONAL.name }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${PERSONAL.name} | ${PERSONAL.role}`,
    description: PERSONAL.summary,
    siteName: PERSONAL.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} | ${PERSONAL.role}`,
    description: PERSONAL.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-base-950 text-slate-100 antialiased selection:bg-signal-teal/30 selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
