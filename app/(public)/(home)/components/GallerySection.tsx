import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GallerySection = () => {
  return (
    <section className="padding-vertical">
      <div className="max-width">
        <h2 className="mb-4 md:mb-8 h2-semibold text-center font-inter">
          Image Gallery
        </h2>

        <div className="flex flex-wrap">
          <Image
            src={"/images/gallery/mm-1.jpg"}
            alt="mm-1"
            width={400}
            height={300}
          />
          <Image
            src={"/images/gallery/mm-2.jpg"}
            alt="mm-1"
            width={400}
            height={300}
          />
          <Image
            src={"/images/gallery/mm-3.jpg"}
            alt="mm-1"
            width={400}
            height={300}
          />
          <Image
            src={"/images/gallery/mm-4.jpg"}
            alt="mm-1"
            width={400}
            height={300}
          />
          <Image
            src={"/images/gallery/mm-5.jpg"}
            alt="mm-1"
            width={400}
            height={300}
          />
          <Image
            src={"/images/gallery/mm-6.jpg"}
            alt="mm-1"
            width={400}
            height={300}
          />
        </div>

        <div className="mt-10">
          <Link href={"/gallery"}>
            <Button className="text-white">Visit Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
