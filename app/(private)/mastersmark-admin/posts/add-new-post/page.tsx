import React from "react";
import type { Metadata } from "next";
import Post from "@/components/forms/Post";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Add New Post | Master'sMark",
  description: "Master'sMark Education",
};

const Page = () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="h1-medium">Add a new Blog Post</h1>
      </div>

      <div className="mt-9">
        <Post />
      </div>
    </div>
  );
};

export default Page;
