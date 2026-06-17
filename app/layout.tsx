import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "remixicon/fonts/remixicon.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medieval Misconceptions",
  description: "Challenging centuries of embellished history, one well-researched article at a time. The truth is stranger — and more fascinating — than fiction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <footer className="bg-foreground py-10">
          <div className="text-tiny">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg text-background-light">
                  <i className="ri-quill-pen-line text-base"></i>
                </div>
                <span className="font-display text-lg font-bold text-background-light">Medieval Misconceptions</span>
              </div>
              <p className="text-sm md:max-w-sm">Separating medieval fact from fiction since 2026. Every article is backed by verified sources. Images are AI-generated.</p>
            </div>
            <div className="border-t border-tiny/35 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
              <p className="text-xs">&copy; 2026 Medieval Misconceptions</p>
              <p className="font-display text-sm italic text-center sm:text-right flex-1">&ldquo;The past is a foreign country — they do things differently there.&rdquo; <span className="text-xs not-italic">— L.P. Hartley</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
