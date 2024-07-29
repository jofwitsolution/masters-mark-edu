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

const EventSection = () => {
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
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="!p-2">
                      <CardContent className="p-0">
                        <Image
                          src={"/images/event-1.jpg"}
                          width={360}
                          height={268}
                          alt="event"
                          className="rounded"
                        />
                      </CardContent>
                      <CardFooter className="h-[80px] p-2 flex items-start">
                        <h3 className="h3-semibold">Sport and Fun Day</h3>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
