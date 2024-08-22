import Entrance from "@/components/Entrance";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Preschool/Nursery School | Master'sMark",
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
    "mastersmark creche",
    "mastersmark preschool nursery",
    "mastersmark primary school",
    "mastersmark afterschool club",
    "preschool",
  ],
};
const Page = () => {
  return (
    <div>
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">Preschool/Nursery</h1>
        </div>
      </div>
      <section className="max-width pt-7">
        <div className="flex gap-2 flex-wrap items-start">
          <Image
            src={"/images/preschool-1.png"}
            alt="preschool"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/preschool-3.png"}
            alt="preschool"
            width={300}
            height={239}
          />
          <Image
            src={"/images/preschool-4.jpg"}
            alt="preschool"
            width={300}
            height={239}
          />
          <Image
            src={"/images/preschool-5.jpg"}
            alt="preschool"
            width={300}
            height={239}
          />
          <Image
            src={"/images/preschool-6.jpg"}
            alt="preschool"
            width={300}
            height={239}
          />
          <Image
            src={"/images/preschool-7.jpg"}
            alt="preschool"
            width={300}
            height={239}
          />
        </div>

        <div className="mt-8 leading-[28px] font-inter">
          <p>
            We believe every child has a bright future. It takes just the right
            atmosphere to direct and condition the child for it. We endevour to
            provide a solid foundation- physically, socially and intellectually.
            We inspire children to be the best they can be. This program places
            emphasis on building a solid foundation that encompasses the
            cognitive, social, communication, and emotional development of your
            child.
          </p>
          <br />
          <p>
            At <strong>MASTER’SMARK</strong>, we believe children play an active
            role in their learning; our educators support them to develop their
            innate skills while they work along with their parents and families
            to guide them to great success
          </p>
          <br />

          <p>OUR PRESCHOOL IS SUBDIVIDED INTO:</p>
          <ul className="list-disc">
            <li>Preschool 1 – 18months to 2+</li>
            <li>Nursery 1 – 3+ to 4+</li>
            <li>Nursery 2 – 4+ to 5+</li>
          </ul>
          <br />

          <p>
            Our preschool is a main part of the larger school where activities
            go on in groups. For example: Excursions, fairs and working together
            are activities to help the children in developing social skills. We
            are focused on developing the child at every stage of their early
            years, and encourage the development of their inherent gifts by
            providing the children with:
          </p>

          <p>
            Stimulating activities for play & learningCaring environment in
            which the child may experience loveA safe place to share, sing, play
            and have fun. (Child Protection Policy in place)
          </p>
          <br />

          <p>
            Here are some of the activities we emphasize so that each child may
            develop interest in them:
          </p>

          <ul className="list-disc">
            <li>Swimming</li>
            <li>
              Music ( Instruments – Keyboard & Recorder – Other instruments to
              be added soon)
            </li>
            <li>Dance – Ballet, Choreography</li>
            <li>Phonics</li>
            <li>Coding</li>
          </ul>
        </div>
      </section>

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
            <Link
              href={"/schools/after-school-club"}
              className="flex flex-col gap-2 w-[350px] group"
            >
              <Image
                src={"/images/after-school.jpg"}
                alt="after_school_club"
                width={350}
                height={300}
                className="h-[300px] w-[360px]"
              />
              <h3 className="mt-1 h3-semibold text-primary group-hover:underline">
                After School/Saturday Club
              </h3>
              <p className="font-inter leading-[28px]">
                The club employs activities that develops the faculties of the
                total child in their academics, social skills, etc
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
