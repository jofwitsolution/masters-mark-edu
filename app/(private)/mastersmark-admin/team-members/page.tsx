import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import MemberTable from "@/components/tables/MemberTable";
import { getTeamMembers } from "@/lib/actions/team.actions";

export const metadata: Metadata = {
  title: "Team Members | Master'sMark",
  description: "Master'sMark Education Team Members",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const memberResult = await getTeamMembers();

  async function sanitizeData(data: any) {
    return JSON.parse(JSON.stringify(data));
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium font-inter">Team</h1>
        <Link href={"/mastersmark-admin/team-members/add-new-member"}>
          <Button className="text-white">Add New Member</Button>
        </Link>
      </div>

      <div className="mt-6">
        <MemberTable members={await sanitizeData(memberResult.members)} />
      </div>
    </div>
  );
};

export default Page;
