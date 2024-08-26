"use client";

import React from "react";
import ReviewCard from "@/components/cards/ReviewCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IReview } from "@/lib/models/Review";

const ReviewSection = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <section className="bg-tertiary-200 padding-vertical">
      <div className="max-width">
        <div className="mb-4 md:mb-8">
          <h2 className="mb-6 h2-semibold text-center font-inter">
            What Parent&apos; Say
          </h2>
          <p className="paragraph-grey text-center mx-auto max-w-[300px]">
            Genuine feedback from our satisfied parents about their kids
          </p>
        </div>
        <div className="mb-12 max-w-[1100px] mx-auto flex flex-col max-md:items-center md:flex-row justify-center gap-8">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href={"/reviews#reviews"}>
            <Button className="btn-2 text-white">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
