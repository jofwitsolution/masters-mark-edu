"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const MiniCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="h-[453px] relative w-full">
          <Image
            src="/images/gallery/mm-3.jpg"
            alt="kids"
            fill
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem className="h-[453px] relative w-full">
          <Image
            src="/images/gallery/mm-5.jpg"
            alt="students"
            fill
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem className="h-[453px] relative w-full">
          <Image
            src="/images/gallery/mm-2.jpg"
            alt="students"
            fill
            className="object-cover"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default MiniCarousel;
