import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

const SchoolsHero = () => {
  return (
    <section className="h-[300px] md:h-[450px] relative w-full">
      <Image
        src={"/images/home-hero-img-2.png"}
        alt="hero-image"
        fill
        className="object-cover"
      />
      <div className="absolute w-full h-full z-[10]">
        <div className="max-width h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="h1-gabriela text-white">Courses</h1>
            {/* <Link href="/contact">
              <Button className="w-[160px] border-2 border-secondary bg-white text-black">
                Apply now
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsHero;
