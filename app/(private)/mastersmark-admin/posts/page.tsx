import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import PostsTable from "@/components/tables/PostsTable";
import { getPosts } from "@/lib/actions/post.actions";
import { sanitizeData } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Posts | Master'sMark",
  description: "Master'sMark Education Blog Posts",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const postResult = await getPosts();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium font-inter">Posts</h1>
        <Link href={"/mastersmark-admin/posts/add-new-post"}>
          <Button className="text-white">Add New Post</Button>
        </Link>
      </div>

      <div className="mt-6">
        <PostsTable posts={await sanitizeData(postResult.posts)} />
      </div>
    </div>
  );
};

export default Page;
