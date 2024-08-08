import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section>
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">School Management Team</h1>
        </div>
      </div>
      <div className="max-width pt-7">
        <p className="font-medium font-inter">
          Meet the management team dedicated to continue improving
          Master&apos;sMark day by day, year on year.
        </p>

        <div className="flex justify-between">
          <div className="mt-10 flex flex-wrap gap-8 max-w-[700px]">
            <div className="flex flex-col gap-2 w-max">
              <Image
                src={"/images/oluwayomi-onabanjo-short.png"}
                alt="director"
                width={300}
                height={240}
                className="w-[300px] h-[240px]"
              />
              <div className="flex flex-col gap-1">
                <h2 className="h3-semibold">Oluwayomi Onabanjo</h2>
                <span>Director</span>
              </div>
              <div className="border-2" />
            </div>

            <div className="flex flex-col gap-2 w-max">
              <Image
                src={"/images/arc-olugbenga-onabanjo.png"}
                alt="director"
                width={300}
                height={240}
                className="w-[300px] h-[240px]"
              />
              <div className="flex flex-col gap-1">
                <h2 className="h3-semibold">ARC Olugbenga Onabanjo</h2>
                <span>Chairman</span>
              </div>
              <div className="border-2" />
            </div>

            <div className="flex flex-col gap-2 w-max">
              <Image
                src={"/images/mrs-olufunmilola-oshinloye.png"}
                alt="head-of-education"
                width={300}
                height={240}
                className="w-[300px] h-[240px]"
              />
              <div className="flex flex-col gap-1">
                <h2 className="h3-semibold">Mrs Olufunmiloa Oshinloye</h2>
                <span>Head of Education</span>
              </div>
              <div className="border-2" />
            </div>

            <div className="flex flex-col gap-2 w-max">
              <Image
                src={"/images/ayokunle-okunowo.png"}
                alt="senior-admin-personel"
                width={300}
                height={240}
                className="w-[300px] h-[240px]"
              />
              <div className="flex flex-col gap-1">
                <h2 className="h3-semibold">Mr Ayokunle Okunowo</h2>
                <span>Senior Admin Personnel</span>
              </div>
              <div className="border-2" />
            </div>
          </div>

          <div className="max-lg:hidden w-[250px] flex flex-col py-8">
            <Link
              href={"/about"}
              className="inline-block py-2 border-b-2 underline text-primary font-medium"
            >
              About Us
            </Link>
            <Link
              href={"/from-director-desk"}
              className="inline-block py-2 border-b-2 underline text-primary font-medium"
            >
              The director&apos;s desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
