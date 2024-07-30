import React from "react";
import HomeHero from "./components/HomeHero";
import NumbersSection from "@/components/NumbersSection";
import IntroSection from "./components/IntroSection";
import ReviewSection from "./components/ReviewSection";
import EventSection from "./components/EventSection";
import FeatureSection from "./components/FeatureSection";
import BlogSection from "./components/BlogSection";

const Page = () => {
  return (
    <div>
      <HomeHero />
      <NumbersSection />
      <IntroSection />
      <FeatureSection />
      <ReviewSection />
      <EventSection />
      <BlogSection />
    </div>
  );
};

export default Page;
