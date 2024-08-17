import React from "react";
import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EventForm from "@/components/forms/EventForm";

export const metadata: Metadata = {
  title: "Add New Event | Master'sMark",
  description: "Master'sMark Education",
};

const Page = () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  return (
    <>
      <div className="flex justify-between">
        <h1 className="h1-medium">Add a new Event</h1>
      </div>

      <div className="mt-9">
        <EventForm />
      </div>
    </>
  );
};

export default Page;
