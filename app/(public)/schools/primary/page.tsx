import Entrance from "@/components/Entrance";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Primary School | Master'sMark",
  description: "Master'sMark Education Program",
};

const Page = () => {
  return (
    <div>
      <section className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">Primary School</h1>
        </div>
      </section>
      <div className="max-width pt-7">
        <div className="flex gap-2 flex-wrap items-start">
          <Image
            src={"/images/primary-1.jpg"}
            alt="primary"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/primary-2.jpg"}
            alt="primary"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/primary-3.jpg"}
            alt="primary"
            width={300}
            height={239}
            className=""
          />
          <Image
            src={"/images/primary-4.jpg"}
            alt="primary"
            width={300}
            height={239}
            className=""
          />
        </div>

        <div className="mt-8 leading-[28px] font-inter">
          <p>
            Welcome to Master’s Mark Primary School, where we are dedicated to
            cultivating an environment that not only promotes academic
            excellence but also nurtures each child’s unique potential.
          </p>
          <br />

          <p>
            We recognize that every student is special, and we are committed to
            helping them shine in their own distinctive way.
          </p>
          <br />

          <p>
            At Master’s Mark, we create a nurturing environment where every
            child is welcomed with kindness, supported with compassion, and
            guided with care. Our goal is to make each day a meaningful step in
            their journey of growth and discovery.
          </p>
          <br />

          <p>
            We believe that true education ignites creativity, builds
            resilience, and strengthens character. Through our holistic
            approach, we ensure that children not only excel academically but
            also develop the confidence, empathy, and determination to make a
            positive impact in the world.
          </p>

          <br />

          <p>
            Experience the uniqueness of Master’s Mark Primary School, where
            learning is an adventure, possibilities are endless, and every child
            is encouraged to reach new heights.
          </p>
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
