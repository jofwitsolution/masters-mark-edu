import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Entrance = () => {
  return (
    <section className="padding-vertical">
      <div className="max-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="h2-semibold">At Master&apos;sMark</h3>
            <div className="mt-4">
              <h4 className="text-[38px] leading-[32px] md:text-[58px] md:leading-[48px] text-red-500 uppercase font-inter font-semibold">
                Entrance
              </h4>
              <h4 className="text-[28px] leading-[25px] md:text-[35px] md:leading-[30px] text-primary-100 uppercase font-inter font-semibold">
                Examination
              </h4>
              <div className="mt-4 bg-primary py-4 px-6 rounded-[60px]">
                <p className="text-white font-semibold uppercase">
                  Runs all through the year
                </p>
              </div>
              <div className="mt-4 bg-red-500 py-4 px-6 rounded-[60px]">
                <p className="text-white font-semibold uppercase">
                  For applications and enquiries
                </p>
              </div>
              <Link
                href={"/contact"}
                className="flex gap-2 group mt-4 bg-primary-100 py-4 px-6 rounded-[60px]"
              >
                <p className="text-white group-hover:underline font-semibold uppercase">
                  Get in touch
                </p>
                <span className="text-white">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <Image
              src={"/images/event-1.jpg"}
              alt="kids-playing-sport"
              width={300}
              height={300}
              className=""
            />

            <Image
              src={"/images/img-5.jpg"}
              alt="kids-playing-sport"
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entrance;
