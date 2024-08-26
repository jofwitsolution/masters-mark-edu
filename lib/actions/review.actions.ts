"use server";

import { revalidatePath } from "next/cache";
import Review from "../models/Review";
import { connectToDatabase } from "../mongoose";

export const createReview = async ({
  name,
  rating,
  occupation,
  comment,
}: {
  name: string;
  rating: string;
  occupation: string;
  comment: string;
}) => {
  try {
    await connectToDatabase();

    const review = await Review.create({ name, rating, occupation, comment });

    return JSON.stringify({ message: "Review created successfully!", review });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getReviews = async ({
  isApproved,
  pageSize = 0,
  page = 1,
}: {
  isApproved?: boolean;
  pageSize?: number;
  page?: number;
}) => {
  try {
    await connectToDatabase();

    const query = {};
    if (isApproved) {
      query.isApproved = isApproved;
    }

    if (pageSize === 0) {
      const reviews = await Review.find(query).sort({ createdAt: -1 });

      return { reviews };
    } else {
      // Calculcate the number of posts to skip based on the page number and page size
      const skipAmount = (page - 1) * pageSize;
      const reviews = await Review.find(query)
        .skip(skipAmount)
        .limit(pageSize)
        .sort({ createdAt: -1 });

      const totalReviews = await Review.countDocuments(query);

      const isNext = totalReviews > skipAmount + reviews.length;

      return { reviews, isNext };
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const approveReview = async ({
  reviewId,
  isApproved,
  path,
}: {
  reviewId: string;
  isApproved: boolean;
  path: string;
}) => {
  try {
    await connectToDatabase();

    await Review.findByIdAndUpdate(reviewId, { isApproved: isApproved });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteReview = async ({
  reviewId,
  path,
}: {
  reviewId: string;
  path: string;
}) => {
  try {
    await connectToDatabase();

    await Review.findByIdAndDelete(reviewId);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
