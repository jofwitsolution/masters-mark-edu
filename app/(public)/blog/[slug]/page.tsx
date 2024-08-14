import React from "react";
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/actions/post.actions";
import Image from "next/image";
import ParseHTML from "@/components/PassHTML";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const post = await getPostBySlug(params.slug);

  return {
    title: `${post.title} | Master'sMark`,
    description: `Master'sMark Education Blog Posts - ${post.title}`,
  };
}

const Page = async ({ params }: Props) => {
  const post = await getPostBySlug(params.slug);

  return (
    <div>
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h2-gabriela text-primary">{post?.title}</h1>
        </div>
      </div>
      <div className="max-width padding-vertical flex justify-between">
        <div className="w-full md:w-[70%]">
          <div>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={600}
              className="rounded-md object-cover"
            />
          </div>
          <div className="mt-8">
            <ParseHTML data={post.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
