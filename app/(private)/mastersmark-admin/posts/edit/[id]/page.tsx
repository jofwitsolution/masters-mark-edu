import React from "react";
import type { Metadata } from "next";
import { getPostById } from "@/lib/actions/post.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PostForm from "@/components/forms/PostForm";

export const metadata: Metadata = {
  title: "Edit Post | Master'sMark",
  description: "Master'sMark Education Blog Posts",
};

const Page = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const post = await getPostById(params.id);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="h1-medium">Edit Post</h1>
      </div>
      <div className="mt-9">
        <PostForm type="edit" postDetails={JSON.stringify(post)} />
      </div>
    </>
  );
};

export default Page;
