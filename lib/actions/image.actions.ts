"use server";

// import { revalidatePath } from "next/cache";
// import Event from "../models/Event";
import { connectToDatabase } from "../mongoose";
import { cloudinary } from "../helpers/cloudinary";

export const uploadFile = async (blobFile: string) => {
  try {
    await connectToDatabase();

    if (blobFile) {
      const uploadResult = await cloudinary.uploader.upload(
        blobFile as string,
        {
          folder: "event-images",
        }
      );

      return { url: uploadResult.secure_url };
    }

    return { url: "" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteFile = async ({ publicId }: { publicId: string }) => {
  try {
    await cloudinary.uploader.destroy(publicId);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
