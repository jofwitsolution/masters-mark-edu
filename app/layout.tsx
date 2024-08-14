import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Urbanist, Gabriela } from "next/font/google";
import "./globals.css";
import "@/styles/style.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gabriela",
});

export const metadata: Metadata = {
  title: "Master'sMark",
  description: "Master'sMark Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${urbanist.variable} ${gabriela.variable}`}
        >
          <Toaster position="top-right" richColors className="z-[9500]" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
