import React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import GalleryImages from "./components/GalleryImages";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllMedia } from "@/lib/actions/media.action";
import { sanitizeData } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery | Master'sMark",
  description: "Master'sMark Education Gallery",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const mediaResult = await getAllMedia();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium font-inter">Gallery Images</h1>
        <Link href={"/mastersmark-admin/gallery/upload"}>
          <Button className="text-white">Add New Image</Button>
        </Link>
      </div>

      <div className="mt-20">
        <GalleryImages media={(await sanitizeData(mediaResult.media)) ?? []} />
      </div>
    </div>
  );
};

export default Page;
