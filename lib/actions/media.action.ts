"use server";

// import { revalidatePath } from "next/cache";
// import Event from "../models/Event";
import { connectToDatabase } from "../mongoose";
import { cloudinary } from "../helpers/cloudinary";
import Media from "../models/Media";
import { revalidatePath } from "next/cache";

export const uploadMedia = async ({
  media,
}: {
  media: { url?: string; publicId?: string }[];
}) => {
  try {
    await connectToDatabase();

    await Promise.all(media.map((media) => Media.create(media)));
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getAllMedia = async () => {
  try {
    const media = await Media.find({}).sort({ createdAt: -1 });

    return { media };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteOneMedia = async ({
  publicId,
  path,
}: {
  publicId: string;
  path: string;
}) => {
  try {
    await Media.findOneAndDelete({ publicId });
    await cloudinary.uploader.destroy(publicId);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
