import React from "react";
import type { Metadata } from "next";
import { getAllPost } from "@/lib/actions/post.actions";
import PostCard from "@/components/cards/PostCard";
import LocalSearchbar from "@/components/search/LocalSearchbar";
import Pagination from "@/components/Pagination";
import Filter from "@/components/search/Filter";
import { PostFilters } from "@/constants/filters";

export const metadata: Metadata = {
  title: "Blog Posts | Master'sMark",
  description: "Master'sMark Education Blog Posts",
};

const Page = async ({ searchParams }: SearchParamsProps) => {
  const postResult = await getAllPost({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <div className="">
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela text-primary">Latest Blog</h1>
        </div>
      </div>
      <div className="max-width padding-vertical flex justify-between">
        <div className="w-full md:w-[70%] space-y-6">
          {postResult?.posts.length > 0 ? (
            <>
              {postResult?.posts?.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </>
          ) : (
            <p className="text-center font-semibold text-[18px]">
              No blog posts found.
            </p>
          )}

          <div className="mt-10">
            <Pagination
              pageNumber={searchParams?.page ? +searchParams.page : 1}
              isNext={postResult.isNext as boolean}
            />
          </div>
        </div>

        <div className="max-lg:hidden w-[250px]">
          <LocalSearchbar
            route="/blog"
            iconPosition="left"
            imgSrc="/icons/search.svg"
            placeholder="Search for posts..."
            otherClasses="flex-1 border"
          />

          <Filter filters={PostFilters} />
        </div>
      </div>
    </div>
  );
};

export default Page;
