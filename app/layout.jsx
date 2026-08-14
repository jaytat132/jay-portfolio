import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import SiteChrome from "@/components/SiteChrome";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--found-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL("https://www.jaytat.dev"),
  title: "Jay Tat",
  description: "Jay Tat's portfolio and product website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <SiteChrome />
        <PageTransition>
          <Analytics />
          <SpeedInsights />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
