import React from "react";
import HomeHero from "./components/HomeHero";
import NumbersSection from "@/components/NumbersSection";
import IntroSection from "./components/IntroSection";
import ReviewSection from "./components/ReviewSection";
import EventSection from "./components/EventSection";

const Page = () => {
  return (
    <div>
      <HomeHero />
      <NumbersSection />
      <IntroSection />
      <ReviewSection />
      <EventSection />
    </div>
  );
};

export default Page;
