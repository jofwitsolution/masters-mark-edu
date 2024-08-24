import React from "react";
import SchoolsHero from "./components/SchoolsHero";
import Courses from "./components/Courses";
import BlogSection from "../(home)/components/BlogSection";
import Entrance from "@/components/Entrance";
import { Metadata } from "next";
import { sanitizeData } from "@/lib/utils";
import { getPosts } from "@/lib/actions/post.actions";

export const metadata: Metadata = {
  title: "Schools | Master'sMark",
  description:
    "Master'sMark Education Programs. Creche, preschool/nursery, primary, and afterschool club.",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
    "management",
    "master'smark management team",
    "master'smark programs",
    "master'smark courses",
    "master'smark course",
    "masters mark schools",
    "mastersmark schools",
    "mastersmark creche",
    "mastersmark preschool nursery",
    "mastersmark primary school",
    "mastersmark afterschool club",
  ],
};

const Page = async () => {
  const postResult = await getPosts();

  return (
    <div>
      <SchoolsHero />
      <Courses />
      <Entrance />
      <BlogSection posts={(await sanitizeData(postResult.posts)) ?? []} />
    </div>
  );
};

export default Page;
