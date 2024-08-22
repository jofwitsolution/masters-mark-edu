import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Director's Desk | Master'sMark",
  description:
    "Our main goal is to provide a comprehensive education that fosters intellectual curiosity, emotional well-being, and moral strength in each child.",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
    "from the director desk",
  ],
};

const Page = () => {
  return (
    <section>
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">Welcome to Master&apos;sMark</h1>
        </div>
      </div>
      <div className="max-width">
        <div className="flex justify-between">
          <div className="py-8 max-w-[850px]">
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="">
                <Image
                  src={"/images/oluwayomi-onabanjo.png"}
                  alt="oluwayomi-onabanjo"
                  width={300}
                  height={300}
                  className=""
                />
              </div>
              <div className="md:max-w-[60%] paragraph-work_sans leading-[28px] text-wrap">
                <p>
                  Welcome to <strong>MASTER&apos;SMARK</strong> School, where we
                  are dedicated to guiding our students to become outstanding
                  leaders, grounded in integrity, confidence, and respect. Our
                  main goal is to provide a comprehensive education that fosters
                  intellectual curiosity, emotional well-being, and moral
                  strength in each child.
                </p>
                <br />
                <p>
                  Safety is our highest priority at{" "}
                  <strong>MASTER&apos;SMARK</strong> School. We have devoted
                  ourselves to creating a secure and nurturing environment where
                  everyone is valued and protected. Our comprehensive safety
                  protocols and diligent supervision ensure that our school
                  remains a place where students can learn and thrive without
                  fear or distractions.
                </p>
                <br />
                <p>
                  Collaboration and teamwork are at the core of our philosophy.
                  By nurturing a supportive network that includes our qualified
                  and committed teachers and staff, parents, students, and the
                  community, we aim to empower each child to reach their fullest
                  potential.
                </p>
              </div>
            </div>
            <p className="paragraph-work_sans leading-[28px]">
              Respect and integrity are fundamental to our school community. We
              place great emphasis on the values of mutual respect, honesty, and
              empathy, preparing our students to become responsible citizens who
              uphold the highest ethical standards in all aspects of their
              lives.
            </p>
            <br />
            <p className="paragraph-work_sans leading-[28px]">
              Our commitment at <strong>MASTER&apos;SMARK</strong> School
              extends beyond academic success. We strive to nurture
              compassionate, resilient, and empathetic individuals who are ready
              to face the challenges of an ever-changing world. We invite you to
              join us on this journey of growth, discovery, and transformation.
            </p>
            <br />
            <p className="paragraph-work_sans leading-[28px]">
              Thank you for entrusting us with the education and nurturing of
              your child. Together, let&apos;s create an even brighter future
              for all.
            </p>
            <br />
            <p className="paragraph-work_sans leading-[28px] font-semibold">
              Oluwayomi Onabanjo
            </p>
            <p className="paragraph-work_sans leading-[28px]">
              Director of School
            </p>
          </div>

          <div className="max-lg:hidden w-[250px] flex flex-col py-8">
            <Link
              href={"/about"}
              className="inline-block py-2 border-b-2 underline text-primary font-medium"
            >
              About Us
            </Link>
            <Link
              href={"/management"}
              className="inline-block py-2 border-b-2 underline text-primary font-medium"
            >
              Management
            </Link>
          </div>
        </div>
        <div className="border-8 w-full" />
      </div>
    </section>
  );
};

export default Page;
