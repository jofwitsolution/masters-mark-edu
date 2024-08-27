import React from "react";
import type { Metadata } from "next";
import { getAllEvent } from "@/lib/actions/event.actions";
import EventCard from "@/components/cards/EventCard";
import Pagination from "@/components/Pagination";
import LocalSearchbar from "@/components/search/LocalSearchbar";
import Filter from "@/components/search/Filter";
import { EventFilters } from "@/constants/filters";

export const metadata: Metadata = {
  title: "Events | Master'sMark",
  description: "Master'sMark Education Events",
};

const Page = async ({ searchParams }: SearchParamsProps) => {
  const eventResult = await getAllEvent({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <div className="">
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela text-primary">Latest Event</h1>
        </div>
      </div>
      <div className="max-width padding-vertical flex justify-between">
        <div className="w-full md:w-[70%] space-y-6">
          {eventResult?.events.length > 0 ? (
            <>
              {eventResult?.events?.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </>
          ) : (
            <p className="text-center font-semibold text-[18px]">
              No events found.
            </p>
          )}

          <div className="mt-10">
            <Pagination
              pageNumber={searchParams?.page ? +searchParams.page : 1}
              isNext={eventResult.isNext as boolean}
            />
          </div>
        </div>

        <div className="max-lg:hidden w-[250px]">
          <LocalSearchbar
            route="/events"
            iconPosition="left"
            imgSrc="/icons/search.svg"
            placeholder="Search for events..."
            otherClasses="flex-1 border"
          />

          <Filter filters={EventFilters} />
        </div>
      </div>
    </div>
  );
};

export default Page;
