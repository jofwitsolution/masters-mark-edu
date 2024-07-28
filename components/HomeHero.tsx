"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";

const HomeHero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
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
              <div className="flex flex-col items-center">
                <span className="text-[24px] max-sm:hidden font-urbanist capitalize font-bold text-secondary text-center">
                  Master&apos;s Mark
                </span>
                <h1 className="font-gabriela max-w-[700px] text-center text-white text-[32px] leading-[44px] sm:text-[48px] sm:leading-[68px]">
                  Supporting Comprehensive Child Growth
                </h1>
                <p className="text-white text-center mt-8 font-inter">
                  We help kids become all they could be!
                </p>
                <div className="mt-8 flex justify-center gap-4 sm:gap-8">
                  <Button className="utility-btn-1">Find a program</Button>
                  <Button className="utility-btn-2">Get in touch</Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/images/home-hero-img-2.png"
              alt="hero-img-1"
              width={1000}
              height={600}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/images/home-hero-img-1.jpg"
              alt="hero-img-1"
              width={1000}
              height={600}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeHero;
