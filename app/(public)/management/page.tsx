import { getTeamMembers } from "@/lib/actions/team.actions";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Management Team | Master'sMark",
  description: "Master'sMark Management Team",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
    "management",
    "master'smark management team",
    "master'smark management",
  ],
};

const Page = async () => {
  const result = await getTeamMembers();
  if (result.error) {
    console.error("Error fetching team members:", result.error);
    return null;
  }

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
            {result?.members.slice(0, 2).map((member) => (
              <div key={member.id} className="flex flex-col gap-2 w-[260px]">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={260}
                  height={300}
                  className="w-[260px] h-[300px]"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="sm:text-[19px] text-wrap font-semibold font-urbanist leading-[30px]">
                    {member.name}
                  </h2>
                  <span className="text-wrap">{member.role}</span>
                </div>
                <div className="border-2" />
              </div>
            ))}
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

        <div className="mt-14 flex flex-wrap gap-8">
          {result?.members.slice(2).map((member) => (
            <div key={member.id} className="flex flex-col gap-2 w-[230px]">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={230}
                height={270}
                className="w-[230px] h-[270px]"
              />
              <div className="flex flex-col gap-1">
                <h2 className="sm:text-[19px] text-wrap font-semibold capitalize font-urbanist">
                  {member.name}
                </h2>
                <span className="text-wrap capitalize">{member.role}</span>
              </div>
              <div className="border-2" />
            </div>
          ))}
        </div>
        <div className="mt-8 border-black border-8 w-full" />
      </div>
    </section>
  );
};

export default Page;
