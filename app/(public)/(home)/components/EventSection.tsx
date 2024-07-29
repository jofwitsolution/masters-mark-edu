"use client";

import React from "react";
import ReviewCard from "@/components/cards/ReviewCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EventSection = () => {
  return (
    <section className="bg-tertiary-200 padding-vertical">
      <div className="max-width">
        <div className="mb-4 md:mb-8">
          <h2 className="mb-6 h2-semibold text-center font-inter">
            Master&apos;s Mark Events
          </h2>
          <p className="paragraph-grey text-center mx-auto max-w-[420px]">
            Check out some of the Recent and Upcoming Events and Activities at
            MASTER&apos;SMARK
          </p>
        </div>
        <div className="mb-12 max-w-[1100px] mx-auto flex justify-center gap-8">
          Event here
        </div>
      </div>
    </section>
  );
};

export default EventSection;
