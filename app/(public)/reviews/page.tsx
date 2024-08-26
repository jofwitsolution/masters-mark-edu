import ReviewForm from "@/components/forms/ReviewForm";
import { Metadata } from "next";
import React from "react";
import Reviews from "./components/Reviews";
import { getReviews } from "@/lib/actions/review.actions";
import { sanitizeData } from "@/lib/utils";
import Pagination from "@/components/Pagination";

export const metadata: Metadata = {
  title: "Reviews | Master'sMark",
  description:
    "Master'sMark Education Parent Reviews. Creche, preschool/nursery, primary, and afterschool club.",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
    "management",
    "master'smark management team",
    "master'smark reviews",
    "reviews",
    "master'smark courses",
    "master'smark course",
    "masters mark schools",
    "mastersmark schools",
    "mastersmark creche",
    "mastersmark preschool nursery",
    "mastersmark primary school",
    "mastersmark afterschool club",
  ],
};

const Page = async ({ searchParams }: { searchParams: { page: number } }) => {
  const reviewResult = await getReviews({
    page: searchParams.page ? +searchParams.page : 1,
    pageSize: 10,
  });

  return (
    <div>
      <section className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">Parent Reviews</h1>
        </div>
      </section>
      <section className="max-width padding-vertical">
        <h2 className="font-urbanist font-semibold text-[20px]">
          Rate Master&apos;sMark Education
        </h2>
        <p className="mt-2 mb-8">
          Write your review by filling the below form (For parents and students)
        </p>

        <ReviewForm />

        <Reviews reviews={(await sanitizeData(reviewResult.reviews)) ?? []} />
        <div className="mt-10">
          <Pagination
            pageNumber={searchParams?.page ? +searchParams.page : 1}
            isNext={reviewResult.isNext as boolean}
            scrollToId="#reviews"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
