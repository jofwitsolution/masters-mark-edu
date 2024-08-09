import Image from "next/image";
import Link from "next/link";
import React from "react";

const Courses = () => {
  return (
    <section className="padding-vertical max-width">
      <h2 className="h2-semibold text-center">Master&apos;sMark Programs</h2>

      <div className="flex flex-wrap gap-5 mt-8 md:mt-12">
        <Link
          href={"/schools/creche"}
          className="flex flex-col gap-2 w-[350px] group"
        >
          <Image
            src={"/images/creche.png"}
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
            src={"/images/pre-school.png"}
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
            child’s innate capabilities, skills and talents to come to the fore.
          </p>
        </Link>
        <Link
          href={"/schools/primary"}
          className="flex flex-col gap-2 w-[350px] group"
        >
          <Image
            src={"/images/primary.jpg"}
            alt="image"
            width={350}
            height={300}
            className="h-[300px] w-[360px]"
          />
          <h3 className="mt-1 h3-semibold text-primary group-hover:underline">
            Primary School
          </h3>
          <p className="font-inter leading-[28px]">Primary school</p>
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
            The club employs activities that develops the faculties of the total
            child in their academics, social skills, etc
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
