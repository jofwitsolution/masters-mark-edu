"use client";

import React from "react";
import { motion } from "framer-motion";
import MiniCarousel from "@/components/carousel/MiniCarousel";
import { SquareCheck } from "lucide-react";

const SectionOne = () => {
  return (
    <section className="padding-vertical">
      <div className="max-width flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-[40%]">
          <h1 className="mb-6 h2-semibold">About Master&apos;sMark</h1>
          <p className="mb-6 paragraph-work_sans leading-[28px]">
            <strong>Master’smark</strong> is a quintessential educational
            facility saddled with a mission of laying a solid foundation in each
            child by developing their social, educational, physical and
            psychological well-being, thereby developing the total child.
          </p>
          <p className="paragraph-work_sans leading-[28px]">
            Our program is designed to prepare children for the future, seeks to
            encourage the development of their inherent gifts by providing the
            children with the following:
          </p>
          <motion.div
            initial="hidden"
            whileInView={{
              visibility: "visible",
              opacity: [0, 1],
              y: [40, 0],
            }}
            transition={{ duration: 1 }}
            className="mt-4"
          >
            <div className="mb-2 flex gap-2 items-center">
              <span className="">
                <SquareCheck fill="#CD6B51" color="white" />
              </span>
              <span className="text-primary">
                Stimulating activities for play and learning
              </span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
              <span className="">
                <SquareCheck fill="#CD6B51" color="white" />
              </span>
              <span className="text-primary">
                A caring environment in which the child may experience love
              </span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
              <span className="">
                <SquareCheck fill="#CD6B51" color="white" />
              </span>
              <span className="text-primary">
                A safe place to share, sing, play and have fun
              </span>
            </div>
          </motion.div>
        </div>
        <div className="md:w-[55%]">
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
            <MiniCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
