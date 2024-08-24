"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Programs from "./Programs";

const IntroSection = () => {
  return (
    <div>
      <section className="max-width padding-vertical">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-[40%]">
            <h2 className="mb-6 h2-semibold">Master&apos;s Mark Education</h2>
            <p className="mb-6 font-inter leading-[28px]">
              <strong>Master’smark</strong> is a quintessential educational
              facility saddled with a mission of laying a solid foundation in
              each child by developing their social, educational, physical and
              psychological well-being, thereby developing the total child. Our
              program is designed to prepare children for the future, seeks to
              encourage the development of their inherent gifts
            </p>

            <Link href="/about">
              <Button className="btn-1 italic bg-primary text-white">
                Learn More
              </Button>
            </Link>
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
              <Image
                src="/images/colored-pencils.jpg"
                alt="colored-pencils"
                width={700}
                height={400}
                className=""
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-width padding-vertical">
        <div className="flex flex-col md:flex-row-reverse justify-between gap-8">
          <div className="md:w-[40%]">
            <h2 className="mb-6 h2-semibold">Our School Programmes</h2>
            <p className="mb-6 font-inter leading-[28px]">
              At <strong>Master&apos;smark</strong>, we recognize that every
              child is unique, with individual needs, interests, and learning
              styles. Our programs are carefully tailored to meet these diverse
              requirements, ensuring each child receives the support and
              stimulation they need to flourish. We create dynamic learning
              environments where children can explore, discover, and grow at
              their own paces
            </p>

            <Link href="/schools">
              <Button className="btn-1 italic bg-secondary hover:bg-secondary-100 text-white">
                Programs
              </Button>
            </Link>
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
              <Image
                src="/images/writing.jpeg"
                alt="writing"
                width={700}
                height={400}
                className=""
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-width padding-vertical">
        <Programs />
      </section>
    </div>
  );
};

export default IntroSection;
