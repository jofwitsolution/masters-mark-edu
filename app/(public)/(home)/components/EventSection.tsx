"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IEvent } from "@/lib/models/Event";
import Link from "next/link";

const EventSection = ({ events }: { events: IEvent[] }) => {
  return (
    <section className="padding-vertical">
      <div className="max-width">
        <div className="mb-4 md:mb-8">
          <h2 className="mb-6 h2-semibold text-center font-inter">
            Master&apos;s Mark Events
          </h2>
          <p className="paragraph-grey text-center mx-auto max-w-[420px]">
            Check out some of the Recent and Upcoming Events and Activities at
            MASTER&apos;SMARK
          </p>
        </div>
        <div className="mb-12 max-w-[1100px] mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="md:w-full"
          >
            <CarouselContent>
              {events.map((event) => (
                <CarouselItem
                  key={event._id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={`/events/${event.slug}`} className="p-1">
                    <Card className="!p-2 max-md:max-w-[340px]">
                      <CardContent className="p-0">
                        <Image
                          src={event.imageUrl}
                          width={360}
                          height={268}
                          alt={event.title}
                          className="rounded h-[268px] object-cover"
                        />
                      </CardContent>
                      <CardFooter className="h-[80px] p-2 flex items-start">
                        <h3 className="h3-semibold">{event.title}</h3>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:hidden" />
            <CarouselNext className="max-sm:hidden" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
