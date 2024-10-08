"use client";

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
import { exceedsMaxLength, truncateString } from "@/lib/utils";
import Link from "next/link";

const ReviewCard = ({ review }: { review: IReview }) => {
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
    >
      <Card className="max-w-[340px] rounded-[12px]">
        <CardHeader>
          <CardTitle className="flex gap-1">
            {Array.from(
              { length: Number(review.rating) },
              (_, index) => index + 1
            ).map((item, index) => (
              <span key={item} className="text-secondary-foreground">
                <Star />
              </span>
            ))}
          </CardTitle>
        </CardHeader>
        <CardContent className="min-h-[162px]">
          <p className="font-inter paragraph-grey">
            {truncateString(review.comment)}{" "}
            {exceedsMaxLength(review.comment) && (
              <Link
                href={`/reviews#${review._id}`}
                className="text-primary cursor-pointer"
              >
                read more
              </Link>
            )}
          </p>
        </CardContent>
        <CardFooter className="flex items-center pt-2 border border-t gap-4">
          <Image
            src={"/icons/reviewer.svg"}
            alt="reviewer"
            width={52}
            height={52}
          />
          <div className="flex flex-col">
            <span className="font-semibold line-clamp-1">{review.name}</span>
            <span className="paragraph-grey line-clamp-1">
              {review.occupation}
            </span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ReviewCard;
