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

const ReviewCard = () => {
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
            {[23, 12, 10, 1, 4].map((item) => (
              <span key={item} className="text-secondary-foreground">
                <Star />
              </span>
            ))}
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[155px]">
          <p className="font-inter paragraph-grey">
            When looking at the team of teachers they provide, I can tell you
            that we are fully satisfied.
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
            <span className="font-semibold">Segun Collins</span>
            <span className="paragraph-grey">Accountant</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ReviewCard;
