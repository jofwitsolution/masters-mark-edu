import Entrance from "@/components/Entrance";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Creche School | Master'sMark",
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
    "masters mark creche",
  ],
};

const Page = () => {
  return (
    <div>
      <section className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">Creche</h1>
        </div>
      </section>
      <div className="max-width pt-7">
        <div className="flex gap-2 flex-wrap items-start">
          <Image
            src={"/images/creche-1.png"}
            alt="creche"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/creche-2.png"}
            alt="creche"
            width={300}
            height={239}
            className=""
          />
        </div>

        <div className="mt-8 leading-[28px] font-inter">
          <p>
            We provide a comfortable, nurturing, and protected “home away from
            home” experience where your child can explore their creativity and
            spark their curiosity of the world. We focus on creating a loving,
            fun filled learning experience for your child to feel warm and
            secure. With trained nurses and caretakers, you can be rest assured
            that your child is in the right hands
          </p>
          <br />

          <p>
            Our crèche is a comfortable home away from home. We give you the
            confidence to leave your babies with us.
          </p>
          <br />

          <div className="font-semibold">
            <p>Opens 06:30am</p>
            <p>Age: 3months – 18months</p>
          </div>
          <br />

          <p>
            Our Crèche is purposely built as a soft baby friendly
            atmosphere.Well equipped with soft beddingsSafe, child sensitive
            toys and focused on keeping children away from allergic
            substances.Clean Environment, The floors in the crèche are made well
            maintained and clean parquet floorings, ensuring there is no
            transfer of unnecessary dirts to the children care areas.Fun
            environment.
          </p>
          <br />

          <p>
            Our personnels are well trained,Cleanly groomed,Child focused
            caregivers.
          </p>

          <br />

          <p>
            We insist on every caregiver go through routine health checks to
            ensure they are free from contagious and health debilitating risks
          </p>
        </div>
      </div>

      <Entrance />

      <section className="bg-tertiary-200 padding-vertical">
        <div className="max-width">
          <div className="flex flex-wrap gap-5 md:mt-12">
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
