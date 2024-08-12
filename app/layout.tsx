import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Urbanist, Gabriela } from "next/font/google";
import "./globals.css";
import "@/styles/style.css";

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
  title: "Master's Mark Edu",
  description: "Master's Mark Education",
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
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
