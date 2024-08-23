import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import EventTable from "@/components/tables/EventTable";
import { getEvents } from "@/lib/actions/event.actions";
import { sanitizeData } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events | Master'sMark",
  description: "Master'sMark Education Events",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const eventResult = await getEvents();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium font-inter">Events</h1>
        <Link href={"/mastersmark-admin/events/add-new-event"}>
          <Button className="text-white">Add New Event</Button>
        </Link>
      </div>

      <div className="mt-6">
        <EventTable events={await sanitizeData(eventResult.events)} />
      </div>
    </div>
  );
};

export default Page;
