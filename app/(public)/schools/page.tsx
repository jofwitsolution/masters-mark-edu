import React from "react";
import SchoolsHero from "./components/SchoolsHero";
import Courses from "./components/Courses";
import BlogSection from "../(home)/components/BlogSection";
import Entrance from "@/components/Entrance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schools | Master'sMark",
  description: "Master'sMark Education Program",
};

const Page = () => {
  return (
    <div>
      <SchoolsHero />
      <Courses />
      <Entrance />
      <BlogSection />
    </div>
  );
};

export default Page;
