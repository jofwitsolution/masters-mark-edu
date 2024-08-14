import React from "react";
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/actions/post.actions";

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

  return <div></div>;
};

export default Page;
