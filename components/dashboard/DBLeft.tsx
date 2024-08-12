"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { adminNavLinks } from "@/constants/nav-links";

const DBLeft = () => {
  const pathname = usePathname();

  return (
    <div className="custom-scrollbar bg-tertiary-200 sticky left-0 top-0 z-[950] flex h-screen shrink-0 flex-col overflow-y-auto pb-4 max-lg:px-1 max-lg:shadow-sm max-md:hidden lg:w-[14rem] xl:w-[15rem]">
      <div className="mt-4 flex w-full justify-center">
        <Link href="/">
          <Image
            src="/images/mmlogo.png"
            width={130}
            height={60}
            alt="site logo"
            className="max-lg:hidden"
          />
          <Image
            src="/images/mmlogo.png"
            width={30}
            height={30}
            alt="site logo"
            className="lg:hidden"
          />
        </Link>
      </div>
      <div className="mt-12 flex w-full flex-col items-center gap-[1rem]">
        {adminNavLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link key={item.label} href={item.route} className="">
              <Button
                className={`${
                  isActive ? "bg-primary text-white" : "bg-white text-slate-800"
                } flex justify-start gap-[0.63rem] rounded-[5px] pb-[0.5625rem] pl-[0.6875rem] pt-[0.6875rem] hover:bg-primary-100 hover:text-slate-800 lg:w-[12.125rem] xl:w-[13.125rem]`}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt="icon"
                  className=""
                />
                <span className="max-lg:hidden">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 w-full border" />
    </div>
  );
};

export default DBLeft;
