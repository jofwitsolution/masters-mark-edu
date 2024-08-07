"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const NumbersSection = () => {
  return (
    <section className="pt-12 md:pt-24 pb-10 md:pb-20">
      <motion.div
        initial="hidden"
        whileInView={{ visibility: "visible", opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1 }}
        className="max-width flex gap-12 md:gap-8 max-md:flex-col max-md:items-center justify-between"
      >
        <div className="flex gap-8 items-center">
          <Image
            src="/icons/vertical-line.svg"
            alt="vertical-line"
            width={2}
            height={40}
            className="max-md:hidden"
          />
          <div className="flex gap-4">
            <span className="max-md:hidden">
              <Users size={68} />
            </span>
            <div className="flex flex-col max-md:items-center font-inter">
              <span className="text-[30px] sm:text-[43px] leading-[50px] font-bold">
                25+
              </span>
              <span className="font-semibold text-[21px]">Staffs</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <Image
            src="/icons/vertical-line.svg"
            alt="vertical-line"
            width={2}
            height={40}
            className="max-md:hidden"
          />
          <div className="flex gap-4">
            <Image
              src="/icons/numbers/award.svg"
              alt="award"
              width={68}
              height={59}
              className="max-md:hidden"
            />
            <div className="flex flex-col max-md:items-center font-inter">
              <span className="text-[30px] sm:text-[43px] leading-[50px] font-bold">
                100+
              </span>
              <span className="font-semibold text-[21px]">Graduates</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <Image
            src="/icons/vertical-line.svg"
            alt="vertical-line"
            width={2}
            height={40}
            className="max-md:hidden"
          />
          <div className="flex gap-4">
            <Image
              src="/icons/numbers/clients.svg"
              alt="clients"
              width={68}
              height={59}
              className="max-md:hidden"
            />
            <div className="flex flex-col font-inter max-md:items-center">
              <span className="text-[30px] sm:text-[43px] leading-[50px] font-bold">
                153+
              </span>
              <span className="font-semibold text-[21px]">Happy Student</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NumbersSection;
