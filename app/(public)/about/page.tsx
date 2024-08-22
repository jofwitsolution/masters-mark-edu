import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Master'sMark",
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

const Page = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Page;
