import React from "react";
import Navbar from "@/components/navigations/Navbar";
import TopProgressBar from "@/components/navigations/TopProgressBar";
import Footer from "@/components/Footer";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <TopProgressBar />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PublicLayout;
