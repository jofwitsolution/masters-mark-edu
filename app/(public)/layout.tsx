import React from "react";
import Navbar from "@/components/navigations/Navbar";
import TopProgressBar from "@/components/navigations/TopProgressBar";

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
    </main>
  );
};

export default PublicLayout;
