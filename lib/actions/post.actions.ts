"use server";

import { revalidatePath } from "next/cache";
import { cloudinary } from "../helpers/cloudinary";
import Post from "../models/Post";
import { connectToDatabase } from "../mongoose";
import { createSlug } from "../utils";

export const createPost = async ({
  title,
  content,
  image,
  path,
}: {
  title: string;
  content: string;
  image: string;
  path: string;
}) => {
  try {
    await connectToDatabase();

    let uploadResult;

    if (image) {
      uploadResult = await cloudinary.uploader.upload(image as string, {
        // resource_type: "raw",
        folder: "post-images",
        // public_id: publicId,
      });
    }

    const slug = createSlug(title, 5);

    await Post.create({
      title,
      slug,
      content,
      author: "Master'sMark",
      imageUrl: uploadResult?.secure_url || "",
      imagePublicId: uploadResult?.public_id || "",
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const editPost = async ({
  postId,
  title,
  content,
  image,
}: {
  postId: string;
  title: string;
  content: string;
  image: string;
}) => {
  try {
    await connectToDatabase();

    const post = await Post.findById(postId);
    if (!post) {
      return { error: "Post not found" };
    }

    if (image) {
      // delete existing post image
      if (post?.imagePublicId) {
        await cloudinary.uploader.destroy(post.imagePublicId);
      }

      const uploadResult = await cloudinary.uploader.upload(image as string, {
        folder: "post-images",
      });
      post.imageUrl = uploadResult.secure_url;
      post.imagePublicId = uploadResult.public_id;
    }

    post.title = title;
    post.slug = createSlug(title, 5);
    post.content = content;

    await post.save();

    return { post: JSON.stringify(post) };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getPosts = async () => {
  try {
    await connectToDatabase();

    const posts = await Post.find({});

    return { posts };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getPostById = async (id: string) => {
  try {
    await connectToDatabase();

    const post = await Post.findById(id);

    return post;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    await connectToDatabase();

    const post = await Post.findOne({ slug });

    return post;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (postId: string, path: string) => {
  try {
    await connectToDatabase();

    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return { error: "Post not found" };
    }

    await cloudinary.uploader.destroy(post.imagePublicId);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
