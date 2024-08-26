import React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { sanitizeData } from "@/lib/utils";
import { getReviews } from "@/lib/actions/review.actions";
import ReviewTable from "@/components/tables/ReviewTable";

export const metadata: Metadata = {
  title: "Parent Reviews | Master'sMark",
  description: "Master'sMark Education Reviews",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const reviewResult = await getReviews({});

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium font-inter">All Reviews</h1>
      </div>

      <div className="mt-6">
        <ReviewTable reviews={await sanitizeData(reviewResult.reviews)} />
      </div>
    </div>
  );
};

export default Page;
