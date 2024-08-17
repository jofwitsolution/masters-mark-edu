import React from "react";
import type { Metadata } from "next";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EventForm from "@/components/forms/EventForm";

export const metadata: Metadata = {
  title: "Edit Event | Master'sMark",
  description: "Master'sMark Education Event",
};

const Page = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const event = await getEventById(params.id);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="h1-medium">Edit Event</h1>
      </div>
      <div className="mt-9">
        <EventForm type="edit" eventDetails={JSON.stringify(event)} />
      </div>
    </>
  );
};

export default Page;
