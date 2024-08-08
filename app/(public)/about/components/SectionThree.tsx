import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionThree = () => {
  return (
    <section className="padding-vertical bg-tertiary-200">
      <div className="max-width flex flex-wrap justify-center max-sm:gap-y-4">
        <Link
          href={"/from-director-desk"}
          className="flex flex-col gap-2 hover:text-primary-100"
        >
          <Image
            src={"/images/oluwayomi-onabanjo-short.png"}
            alt="director"
            width={400}
            height={300}
          />
          <h3 className="text-center underline font-medium font-inter text-[20px]">
            From the director&apos;s desk
          </h3>
        </Link>
        <Link
          href={"/management"}
          className="flex flex-col gap-2 hover:text-primary-100"
        >
          <Image
            src={"/images/school.png"}
            alt="school"
            width={400}
            height={300}
          />
          <h3 className="text-center underline font-medium font-inter text-[20px]">
            Management
          </h3>
        </Link>
        <Link
          href={"/gallery"}
          className="flex flex-col gap-2 hover:text-primary-100"
        >
          <Image
            src={"/images/writing-short.png"}
            alt="gallery"
            width={400}
            height={300}
          />
          <h3 className="text-center underline font-medium font-inter text-[20px]">
            Photo Gallery
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default SectionThree;
