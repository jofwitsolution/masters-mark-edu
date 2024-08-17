import React from "react";
import type { Metadata } from "next";
import { getEvents } from "@/lib/actions/event.actions";
import EventCard from "@/components/cards/EventCard";

export const metadata: Metadata = {
  title: "Events | Master'sMark",
  description: "Master'sMark Education Events",
};

const Page = async () => {
  const eventResult = await getEvents();

  return (
    <div className="">
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela text-primary">Latest Event</h1>
        </div>
      </div>
      <div className="max-width padding-vertical flex justify-between">
        <div className="w-full md:w-[70%] space-y-6">
          {eventResult?.events?.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
        <div className="max-lg:hidden w-[250px] flex flex-col py-8"></div>
      </div>
    </div>
  );
};

export default Page;
