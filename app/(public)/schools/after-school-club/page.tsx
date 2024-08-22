import Entrance from "@/components/Entrance";
import { Disc } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Afterschool Club | Master'sMark",
  description: "Master'sMark Education Program",
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
    "masters mark afterschool club",
  ],
};

const Page = () => {
  return (
    <div>
      <section className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">The Afterschool Club</h1>
        </div>
      </section>
      <div className="max-width pt-7">
        <div className="w-full h-[300px] sm:h-[600px] relative mb-8">
          <Image
            src={"/images/afterschool-3.jpg"}
            fill
            alt="afterschoolclub"
            className="object-cover"
          />
        </div>
        <div className="flex max-xs:justify-center gap-2 flex-wrap items-start">
          <Image
            src={"/images/afterschool-1.jpg"}
            alt="afterschool"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/afterschool-6.jpg"}
            alt="afterschool"
            width={300}
            height={239}
            className=""
          />

          <Image
            src={"/images/afterschool-4.jpg"}
            alt="afterschool"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/afterschool-5.jpg"}
            alt="afterschool"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/afterschool-2.jpg"}
            alt="afterschool"
            width={300}
            height={239}
            className=""
          />
        </div>

        <div className="mt-8 leading-[28px] font-inter">
          <p>
            The Afterschool club at <strong>MASTER’SMARK</strong> gives a
            wholistic learning to the pupil/student. The club employs activities
            that develops the faculties of the total child in their mainstream
            academics, social skills, and co-curricula activities.
          </p>
          <br />

          <p>THESE SERVICES STAND OUT AT OUR AFTERSCHOOL CLUB:</p>
          <ul className="list-disc ml-6">
            <li>Tutorials</li>
            <li>Social & Emotional development activities</li>
            <li>Care-giving</li>
            <li>Games (Indoor and Outdoor)</li>
            <li>School runs (pick up and drop off)</li>
            <li>Lunch</li>
            <li>Outing/Excursion</li>
          </ul>
          <br />
          <p>
            The club opens both during academic calendar (Week days and
            Saturdays) and holiday seasons (Week days only)
          </p>
          <p>ACTIVITIES INCLUDE:</p>
          <ul className="list-disc ml-6">
            <li>Tutorials</li>
            <li>Supervision of Assignments</li>
            <li>
              Preparation for Entrance Examinations into Secondary Schools
            </li>
            <li>French Lessons</li>
            <li>Music lessons</li>
            <li>Swimmimg</li>
            <li>Vocational skills</li>
            <li>Dance</li>
            <li>Mentoring and career Talks</li>
            <li>Educational ToursIndoor & Outdoor games</li>
            <li>Spelling BeeArts & Crafts</li>
          </ul>
          <br />
          <h2 className="font-semibold mb-2">THE CLUB HAS THREE CATEGORIES</h2>
          <div className="flex gap-2 items-center">
            <Disc /> <span>Main After School.</span>
          </div>
          <ul className="list-disc ml-6">
            <li>
              Starts daily from 2:30 pm (Registration is required for this
              category.)
            </li>
            <li>Late pick up services</li>
            <li>One off service available</li>
          </ul>
          <br />
          <div className="flex gap-2 items-center">
            <Disc /> <span>Holiday Programs</span>
          </div>
          <ul className="list-disc ml-6">
            <li>1st Term Holiday – Activities (Play, and Caregiving)</li>
            <li>2nd Term Holiday – Activities (Play and Caregiving)</li>
            <li>
              3rd Term Holiday – (long term break) – Activities and School work
              in preparation for the next session
            </li>
          </ul>
          <br />
          <div className="flex gap-2 items-center">
            <Disc /> <span>Saturday Programs</span>
          </div>
          <ul className="list-disc ml-6">
            <li>
              Every Saturday (during the academic term except the last Saturday
              of the month)10:00 am – 4:00 pm
            </li>
            <li>One off service available</li>
          </ul>
          <br />
        </div>
      </div>

      <Entrance />

      <section className="bg-tertiary-200 padding-vertical">
        <div className="max-width">
          <div className="flex flex-wrap gap-5 md:mt-12">
            <Link
              href={"/schools/creche"}
              className="flex flex-col gap-2 w-[350px] group"
            >
              <Image
                src={"/images/creche-1.png"}
                alt="image"
                width={350}
                height={300}
                className="h-[300px] w-[360px]"
              />
              <h3 className="mt-1 h3-semibold text-primary group-hover:underline">
                Creche
              </h3>
              <p className="font-inter leading-[28px]">
                Our crèche is a comfortable home away from home. We give you the
                confidence to leave your babies with us.
              </p>
            </Link>
            <Link
              href={"/schools/preschool"}
              className="flex flex-col gap-2 w-[350px] group"
            >
              <Image
                src={"/images/preschool-1.png"}
                alt="image"
                width={350}
                height={300}
                className="h-[300px] w-[360px]"
              />
              <h3 className="mt-1 h3-semibold text-primary group-hover:underline">
                PreSchool/Nursery
              </h3>
              <p className="font-inter leading-[28px]">
                At our preschool, we give caring instructions required for every
                child’s innate capabilities, skills and talents to come to the
                fore.
              </p>
            </Link>

            <Link
              href={"/schools/primary"}
              className="flex flex-col gap-2 w-[350px] group"
            >
              <Image
                src={"/images/primary-1.jpg"}
                alt="image"
                width={350}
                height={300}
                className="h-[300px] w-[360px]"
              />
              <h3 className="mt-1 h3-semibold text-primary group-hover:underline">
                Primary School
              </h3>
              <p className="font-inter leading-[28px]">
                Experience the uniqueness of <strong>Master’sMark</strong>{" "}
                Primary School, where every child is encouraged to reach new
                heights.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
