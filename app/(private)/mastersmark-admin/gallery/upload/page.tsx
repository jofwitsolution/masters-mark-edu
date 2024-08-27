import React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import MediaUpload from "../components/MediaUpload";

export const metadata: Metadata = {
  title: "Gallery  | Master'sMark",
  description: "Master'sMark Education Media Upload",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium font-inter">Media Upload</h1>
      </div>

      <div className="mt-6">
        <MediaUpload />
      </div>
    </div>
  );
};

export default Page;
