import React from "react";
import HomeHero from "./components/HomeHero";
import NumbersSection from "@/components/NumbersSection";
import IntroSection from "./components/IntroSection";
import ReviewSection from "./components/ReviewSection";
import EventSection from "./components/EventSection";
import FeatureSection from "./components/FeatureSection";
import BlogSection from "./components/BlogSection";
import FacebookPage from "@/components/FacebookPage";
import GallerySection from "./components/GallerySection";

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
      <GallerySection />
      <FacebookPage />
    </div>
  );
};

export default Page;
