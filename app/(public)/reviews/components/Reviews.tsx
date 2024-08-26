"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { IReview } from "@/lib/models/Review";

export const ReviewCardLarge = ({ review }: { review: IReview }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={{
        visibility: "visible",
        opacity: [0, 1],
        y: [40, 0],
      }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id={review._id}
    >
      <Card className="max-w-[800px] rounded-[12px]">
        <CardHeader>
          <CardTitle className="flex gap-1">
            {Array.from(
              { length: Number(review.rating) },
              (_, index) => index + 1
            ).map((item) => (
              <span key={item} className="text-secondary-foreground">
                <Star />
              </span>
            ))}
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <p className="font-inter paragraph-grey">{review.comment}</p>
        </CardContent>
        <CardFooter className="flex items-center pt-2 border border-t gap-4">
          <Image
            src={"/icons/reviewer.svg"}
            alt="reviewer"
            width={52}
            height={52}
          />
          <div className="flex flex-col">
            <span className="font-semibold">{review.name}</span>
            <span className="paragraph-grey">{review.occupation}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div id="reviews" className="flex flex-col gap-8 mt-8">
      {reviews.map((review) => (
        <ReviewCardLarge key={review._id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
