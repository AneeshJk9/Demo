import "./globals.css";

import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import CustomCursor from "../components/CustomCursor";

export const metadata = {
  title: "Jeweluxe — Luxury Web Design Demo",
  description:
    "Jeweluxe is a sample site showcasing premium, conversion-focused web design for jewelry brands and luxury businesses.",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-headline",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
