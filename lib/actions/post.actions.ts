"use server";

import { cloudinary } from "../helpers/cloudinary";
import Post from "../models/Post";
import { connectToDatabase } from "../mongoose";
import { createSlug } from "../utils";

export const createPost = async ({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: string;
}) => {
  try {
    await connectToDatabase();

    if (!image) {
      return { error: "Invalid post image" };
    } else {
      //   const publicId: string = `verification-doc-${Date.now()}`;

      const uploadResult = await cloudinary.uploader.upload(image as string, {
        // resource_type: "raw",
        folder: "post-images",
        // public_id: publicId,
      });

      const slug = createSlug(title, 5);

      await Post.create({
        title,
        slug,
        content,
        author: "Master'sMark",
        imageUrl: uploadResult.secure_url,
        imagePublicId: uploadResult.public_id,
      });
    }
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
