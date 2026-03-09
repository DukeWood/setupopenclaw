import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "SetupOpenClaw — Managed AI Assistant Deployment for UK Teams",
    description:
      "We deploy and maintain your team's OpenClaw AI assistant. Secured from day one, available across the UK.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
