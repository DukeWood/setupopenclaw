import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://setupopenclaw.pro"),
  title: "SetupOpenClaw — Managed AI Assistant Deployment for UK Teams",
  description:
    "We deploy and maintain your team's OpenClaw AI assistant. Secured from day one, available across the UK. From £770.",
  keywords: [
    "OpenClaw",
    "AI assistant",
    "UK",
    "managed deployment",
    "executive agent",
    "business AI",
  ],
  alternates: {
    canonical: "https://setupopenclaw.pro",
  },
  openGraph: {
    title: "SetupOpenClaw — Managed AI Assistant Deployment for UK Teams",
    description:
      "We deploy and maintain your team's OpenClaw AI assistant. Secured from day one, available across the UK.",
    type: "website",
    locale: "en_GB",
    url: "https://setupopenclaw.pro",
    siteName: "SetupOpenClaw",
    images: [
      {
        url: "https://setupopenclaw.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "SetupOpenClaw — Managed AI Assistant Deployment for UK Teams",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SetupOpenClaw — Managed AI Assistant Deployment for UK Teams",
    description:
      "We deploy and maintain your team's OpenClaw AI assistant. Secured from day one, available across the UK. From £770.",
    images: ["https://setupopenclaw.pro/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
