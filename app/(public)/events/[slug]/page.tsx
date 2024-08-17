import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ParseHTML from "@/components/PassHTML";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageNotFound from "@/components/errors/PageNotFound";
import { getEventBySlug } from "@/lib/actions/event.actions";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const event = await getEventBySlug(params.slug);

  if (!event) {
    return {
      title: `Event not found | Master'sMark`,
      description: `Master'sMark Education Events`,
    };
  }
  return {
    title: `${event?.title} | Master'sMark`,
    description: `Master'sMark Education Event - ${event.title}`,
  };
}

const Page = async ({ params }: Props) => {
  const event = await getEventBySlug(params.slug);

  if (!event) return <PageNotFound />;

  return (
    <div>
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h2-gabriela text-primary capitalize">
            {event?.title}
          </h1>
        </div>
      </div>
      <div className="max-width padding-vertical">
        <Link href={`/mastersmark-admin/events/edit/${event._id}`}>
          <Button className="mb-4 bg-tertiary-200 hover:bg-tertiary-300 hover:text-white">
            Edit Event
          </Button>
        </Link>
        <div className="w-full flex justify-between">
          <div className="w-full md:w-[70%]">
            <div>
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={800}
                height={600}
                className="rounded-md object-cover"
              />
            </div>
            <div className="mt-8">
              <ParseHTML data={event.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
