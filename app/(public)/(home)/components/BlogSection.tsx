"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { getDate_2 } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IPost } from "@/lib/models/Post";

const BlogSection = ({ posts }: { posts: IPost[] }) => {
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
          {posts.slice(0, 3).map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`} className="group">
              <Card className="!p-3 bg-slate-200 rounded-3xl w-[330px] group-hover:border group-hover:border-primary">
                <CardTitle className="h-[100px] h3-normal px-2">
                  {post.title}
                </CardTitle>

                <CardContent className="p-0 mt-4">
                  <Image
                    src={post?.imageUrl || "/images/post-placeholder.jpg"}
                    width={320}
                    height={150}
                    alt="event"
                    className="rounded-xl w-full h-[160px]"
                  />
                </CardContent>
                <CardFooter className="p-2 pb-1 flex items-start">
                  <span>{getDate_2(post.createdAt)}</span>
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
