"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroButtons = () => {
  return (
    <div className="mt-8 flex justify-center gap-4 sm:gap-8">
      <Link href="/schools">
        <Button className="rounded-btn-1">Find a program</Button>
      </Link>
      <Link href="/contact">
        <Button className="rounded-btn-2">Apply now</Button>
      </Link>
    </div>
  );
};

const HomeHero = () => {
  const plugin = React.useRef(Autoplay({ delay: 6000 }));

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          <CarouselItem className="h-[400px] sm:h-[700px] relative w-full">
            <Image
              src="/images/home-hero-img-1.jpg"
              alt="hero-img-1"
              fill
              className="object-cover"
            />
            <div className="bg-dark-gradient-300 px-[24px] absolute w-full z-[5] h-full flex items-center justify-center">
              <motion.div
                initial="hidden"
                whileInView={{ opacity: [0, 1], x: [30, 0] }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-[24px] max-sm:hidden font-urbanist capitalize font-bold text-secondary text-center">
                  Master&apos;s Mark
                </span>
                <h1 className="max-w-[700px] text-center h1-gabriela text-white">
                  Supporting Comprehensive Child Growth
                </h1>
                <p className="text-white text-center mt-8 font-inter">
                  We help kids become all they could be!
                </p>
                <HeroButtons />
              </motion.div>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[400px] sm:h-[700px] relative w-full">
            <Image
              src="/images/home-hero-img-2.png"
              alt="hero-img-1"
              fill
              className="object-cover"
            />
            <div className="bg-dark-gradient-300 px-[24px] absolute w-full z-[5] h-full flex items-center justify-center">
              <motion.div
                initial="hidden"
                whileInView={{ opacity: [0, 1], x: [30, 0] }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-[24px] max-sm:hidden font-urbanist capitalize font-bold text-secondary text-center">
                  Master&apos;s Mark
                </span>
                <h1 className="h1-gabriela text-white text-center max-w-[700px]">
                  Safe Learning <br /> Environment
                </h1>
                <p className="text-white text-center mt-8 font-inter">
                  We provide a conducive learning environment
                </p>
                <HeroButtons />
              </motion.div>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[400px] sm:h-[700px] relative w-full">
            <Image
              src="/images/home-hero-img-3.jpg"
              alt="hero-img-3"
              fill
              className="object-cover"
            />
            <div className="bg-dark-gradient-300 px-[24px] absolute w-full z-[5] h-full flex items-center justify-center">
              <motion.div
                initial="hidden"
                whileInView={{ opacity: [0, 1], x: [30, 0] }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-[24px] max-sm:hidden font-urbanist capitalize font-bold text-secondary text-center">
                  Master&apos;s Mark
                </span>
                <h1 className="h1-gabriela text-white text-center max-w-[700px]">
                  Play to Learn <br /> Activities
                </h1>
                <HeroButtons />
              </motion.div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeHero;
