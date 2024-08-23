"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  return (
    <section className="bg-tertiary-200 padding-vertical">
      <div className="max-width flex flex-col md:flex-row justify-between gap-10 md:gap-6">
        <div className="md:w-[46%]">
          <motion.div
            initial="hidden"
            whileInView={{
              visibility: "visible",
              opacity: [0, 1],
              y: [40, 0],
            }}
            transition={{ duration: 1 }}
            className="p-[20px] shadow-md rounded-[2px]"
          >
            <Image
              alt="feature"
              src={"/images/feature-img.jpg"}
              width={550}
              height={610}
            />
          </motion.div>
        </div>
        <div className="md:w-[46%]">
          <h2 className="h2-semibold">Growing young minds</h2>
          <div className="mt-8 md:mt-12 flex flex-col gap-3">
            <div className="flex gap-2 items-start font-inter">
              <span className="text-secondary mt-1">
                <CircleArrowRight />
              </span>
              <p className="paragraph-grey">
                Every child is a unique masterpiece at{" "}
                <strong>master&apos;smark</strong>, where we paint futures
                bright with learning and laughter.
              </p>
            </div>
            <div className="flex gap-2 items-start font-inter">
              <span className="text-secondary mt-1">
                <CircleArrowRight />
              </span>

              <p className="paragraph-grey">
                At <strong>master&apos;smark</strong>, we nurture young minds to
                bloom into their fullest potential.
              </p>
            </div>
            <div className="flex gap-2 items-start font-inter">
              <span className="text-secondary mt-1">
                <CircleArrowRight />
              </span>

              <p className="paragraph-grey">
                We believe in the power of play to shape minds, build character,
                and create joyful learners for life.
              </p>
            </div>
            <div className="flex gap-2 items-start font-inter">
              <span className="text-secondary mt-1">
                <CircleArrowRight />
              </span>

              <p className="paragraph-grey">
                In the garden of childhood, <strong>master&apos;smark</strong>{" "}
                attends to each seedling with care, helping them grow strong
                roots and reach for the sky.
              </p>
            </div>

            <Link href={"/"} className="mt-8">
              <Button className="rounded-btn-2">Apply now</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
