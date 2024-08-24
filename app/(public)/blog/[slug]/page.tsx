import React from "react";
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/actions/post.actions";
import Image from "next/image";
import ParseHTML from "@/components/PassHTML";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageNotFound from "@/components/errors/PageNotFound";
import Programs from "../../(home)/components/Programs";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: `Post not found | Master'sMark`,
      description: `Master'sMark Education Blog Posts`,
    };
  }
  return {
    title: `${post?.title} | Master'sMark`,
    description: `Master'sMark Education Blog Posts - ${post.title}`,
  };
}

const Page = async ({ params }: Props) => {
  const post = await getPostBySlug(params.slug);

  if (!post) return <PageNotFound />;

  return (
    <div>
      <div className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h2-gabriela text-primary capitalize">{post?.title}</h1>
        </div>
      </div>
      <div className="max-width padding-vertical">
        <Link href={`/mastersmark-admin/posts/edit/${post._id}`}>
          <Button className="mb-4 bg-tertiary-200 hover:bg-tertiary-300 hover:text-white">
            Edit Post
          </Button>
        </Link>
        <div className="w-full flex justify-between">
          <div className="w-full md:w-[70%]">
            <div>
              {post?.ImageUrl && (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={1000}
                  height={600}
                  className="rounded-md object-cover"
                />
              )}
            </div>
            <div className="mt-8">
              <ParseHTML data={post.content} />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-tertiary-200 padding-vertical">
        <div className="max-width">
          <Programs />
        </div>
      </section>
    </div>
  );
};

export default Page;
