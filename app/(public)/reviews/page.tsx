import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reviews | Master'sMark",
  description:
    "Master'sMark Education Parent Reviews. Creche, preschool/nursery, primary, and afterschool club.",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
    "management",
    "master'smark management team",
    "master'smark reviews",
    "reviews",
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

const Page = () => {
  return (
    <div>
      <section className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">Parent Reviews</h1>
        </div>
      </section>
    </div>
  );
};

export default Page;
