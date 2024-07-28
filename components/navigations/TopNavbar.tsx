"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { socialLinks } from "@/constants/nav-links";
import Link from "next/link";
import { useScroll } from "framer-motion";

const TopNavbar = () => {
  const { scrollY } = useScroll();
  const [yValue, setYValue] = useState(0);

  useEffect(() => {
    const unsubscribeY = scrollY.on("change", (value) => setYValue(value));

    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  return (
    <div
      className={`${
        yValue == 0 ? "sticky top-0" : "absolute top-[-45px]"
      } w-full max-sm:bg-primary-100 bg-[#F7F7F7] max-sm:h-[35px] h-[45px] transition-all ease-in-out duration-500`}
    >
      <div className="max-width h-full flex justify-end items-center">
        <div className="flex gap-6 items-center">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.route}
              rel="noreferrer"
              target="_blank"
              className=""
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={26}
                height={18}
                className="max-sm:invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
