import React from "react";
import { IEvent } from "@/lib/models/Event";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <Link href={`/events/${event.slug}`} className="block w-full">
      <Card className="!p-0 w-full">
        <CardHeader className="!p-0 w-full">
          <div className="relative h-[300px] w-full">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="rounded-t-md object-cover w-full"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="px-2 sm:px-4 mt-3 space-y-4">
            <CardTitle className="line-clamp-2 text-[18px] leading-[25px] sm:text-[25px] sm:leading-[34px] md:text-[30px] hover:text-primary font-semibold md:leading-[40px]">
              {event.title}
            </CardTitle>

            <div className="flex max-xs:text-[12px] justify-between gap-4 items-center text-gray-500 text-[14px]">
              <div className="flex gap-4">
                <span className="flex gap-2 items-center btn-hover-style">
                  <Image
                    src="/icons/comment.svg"
                    width={18}
                    height={18}
                    alt="comment"
                  />
                  <span>
                    6 <span className="">Comments</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
