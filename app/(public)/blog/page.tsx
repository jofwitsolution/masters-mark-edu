import React from "react";
import type { Metadata } from "next";
import { getPosts } from "@/lib/actions/post.actions";
import PostCard from "@/components/cards/PostCard";

export const metadata: Metadata = {
  title: "Blog Posts | Master'sMark",
  description: "Master'sMark Education Blog Posts",
};

const Page = async () => {
  const postResult = await getPosts();

  return (
    <div className="">
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela text-primary">Latest Blog</h1>
        </div>
      </div>
      <div className="max-width padding-vertical flex justify-between">
        <div className="w-full md:w-[70%] space-y-6">
          {postResult?.posts?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <div className="max-lg:hidden w-[250px] flex flex-col py-8"></div>
      </div>
    </div>
  );
};

export default Page;
