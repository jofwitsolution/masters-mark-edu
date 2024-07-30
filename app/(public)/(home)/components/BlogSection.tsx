"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getDate_2 } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  return (
    <section className="padding-vertical bg-tertiary-200">
      <div className="max-width">
        <div className="mb-4 md:mb-8">
          <h2 className="mb-6 h2-semibold text-center font-inter">
            Latest News
          </h2>
          <p className="paragraph-grey text-center mx-auto max-w-[420px]">
            Recent Blog and Articles from Master&apos;sMark
          </p>
        </div>
        <div className="flex gap-4 flex-wrap max-sm:justify-center xl:justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <Link key={index} href={"/"} className="group">
              <Card className="!p-3 bg-transparent rounded-3xl w-[330px] group-hover:border group-hover:border-primary">
                <CardTitle className="h-[70px] px-2">
                  <h3 className="h3-normal">
                    master’smark Early Learning Educational Services.
                  </h3>
                </CardTitle>
                <CardDescription className="px-2 h-[35px]">
                  <Badge
                    variant="outline"
                    className="text-slate-500 text-[12px]"
                  >
                    #development
                  </Badge>
                </CardDescription>
                <CardContent className="p-0">
                  <Image
                    src={"/images/event-1.jpg"}
                    width={320}
                    height={150}
                    alt="event"
                    className="rounded-xl w-full h-[160px]"
                  />
                </CardContent>
                <CardFooter className="p-2 pb-1 flex items-start">
                  <span>{getDate_2(new Date())}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href={"/blog"}>
            <Button className="btn-2 text-white">Read more</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
