import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Generated Models",
  description: "Waitlist for AI generated models",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
