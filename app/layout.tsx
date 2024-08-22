import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Urbanist, Gabriela } from "next/font/google";
import "./globals.css";
import "@/styles/style.css";
import "@/styles/prism.css";
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
  description:
    "Master’smark is a quintessential educational facility saddled with a mission of laying a solid foundation in each child by developing their social, educational, physical and psychological well-being, thereby developing the total child.",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
  ],
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
