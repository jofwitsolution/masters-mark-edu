import React from "react";
import HomeHero from "./components/HomeHero";
import IntroSection from "./components/IntroSection";
import ReviewSection from "./components/ReviewSection";
import EventSection from "./components/EventSection";
import FeatureSection from "./components/FeatureSection";
import BlogSection from "./components/BlogSection";
import FacebookPage from "@/components/FacebookPage";
import GallerySection from "./components/GallerySection";
import { getEvents } from "@/lib/actions/event.actions";
import { sanitizeData } from "@/lib/utils";
import { getPosts } from "@/lib/actions/post.actions";
import { getReviews } from "@/lib/actions/review.actions";

const Page = async () => {
  const eventResult = await getEvents();
  const postResult = await getPosts();
  const reviewResult = await getReviews({});

  return (
    <div>
      <HomeHero />
      <IntroSection />
      <FeatureSection />
      <ReviewSection
        reviews={(await sanitizeData(reviewResult.reviews)) ?? []}
      />
      <EventSection events={(await sanitizeData(eventResult.events)) ?? []} />
      <BlogSection posts={(await sanitizeData(postResult.posts)) ?? []} />
      <GallerySection />
      <FacebookPage />
    </div>
  );
};

export default Page;
