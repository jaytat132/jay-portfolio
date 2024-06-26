import { JetBrains_Mono } from "next/font/google";
import "./globals.css"; 

// components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800"],
  variable: '--found-jetbrainsMono'
 });

export const metadata = {
  title: "Jay Tat",
  description: "Jay's website porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <Analytics/>
        <SpeedInsights/>
        <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}
