import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import EventTable from "@/components/tables/EventTable";
import { getEvents } from "@/lib/actions/event.actions";

export const metadata: Metadata = {
  title: "Team Members | Master'sMark",
  description: "Master'sMark Education Team Members",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const eventResult = await getEvents();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium font-inter">Team</h1>
        <Link href={"/mastersmark-admin/team-members/add-new-member"}>
          <Button className="text-white">Add New Member</Button>
        </Link>
      </div>

      <div className="mt-6">
        <EventTable events={JSON.stringify(eventResult.events)} />
      </div>
    </div>
  );
};

export default Page;
