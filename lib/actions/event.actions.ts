"use server";

import { revalidatePath } from "next/cache";
import Event from "../models/Event";
import { createSlug } from "../utils";
import { connectToDatabase } from "../mongoose";
import { cloudinary } from "../helpers/cloudinary";
import { FilterQuery } from "mongoose";

export const createEvent = async ({
  title,
  content,
  organizer,
  venue,
  startDate,
  endDate,
  path,
  image,
  media,
}: {
  title: string;
  content: string;
  organizer: string;
  venue: string;
  startDate: Date;
  endDate: Date;
  path: string;
  image: string;
  media: { url?: string; publicId?: string }[];
}) => {
  try {
    await connectToDatabase();

    if (!image) {
      return { error: "Invalid event image" };
    } else {
      const uploadResult = await cloudinary.uploader.upload(image as string, {
        folder: "event-images",
      });

      const slug = createSlug(title, 5);

      await Event.create({
        title,
        slug,
        content,
        organizer,
        venue,
        startDate,
        endDate,
        imageUrl: uploadResult.secure_url,
        imagePublicId: uploadResult.public_id,
        media,
      });

      revalidatePath(path);
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const editEvent = async ({
  eventId,
  title,
  content,
  organizer,
  venue,
  startDate,
  endDate,
  image,
  media,
}: {
  eventId: string;
  title: string;
  content: string;
  organizer: string;
  venue: string;
  startDate: Date;
  endDate: Date;
  image: string;
  media: { url?: string; publicId?: string }[];
}) => {
  try {
    await connectToDatabase();

    const event = await Event.findById(eventId);
    if (!event) {
      return { error: "Event not found" };
    }

    if (image) {
      // delete existing cover image
      await cloudinary.uploader.destroy(event.imagePublicId);

      const uploadResult = await cloudinary.uploader.upload(image as string, {
        folder: "event-images",
      });
      event.imageUrl = uploadResult.secure_url;
      event.imagePublicId = uploadResult.public_id;
    }

    event.title = title;
    event.slug = createSlug(title, 5);
    event.content = content;
    event.organizer = organizer;
    event.venue = venue;
    event.startDate = startDate;
    event.endDate = endDate;
    event.media = media;

    await event.save();

    return { event: JSON.stringify(event) };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getEvents = async () => {
  try {
    await connectToDatabase();

    const events = await Event.find({});

    return { events };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export async function getAllEvent(params: GetAllPostParams) {
  try {
    connectToDatabase();

    const { searchQuery, filter = "recent", page = 1, pageSize = 10 } = params;

    // Calculcate the number of posts to skip based on the page number and page size
    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<typeof Event> = {};

    if (searchQuery) {
      query.$or = [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { content: { $regex: new RegExp(searchQuery, "i") } },
      ];
    }

    let sortOptions = {};

    switch (filter) {
      case "recent":
        sortOptions = { createdAt: -1 };
        break;
      case "old":
        sortOptions = { createdAt: 1 };
        break;
      default:
        break;
    }

    const events = await Event.find(query)
      .skip(skipAmount)
      .limit(pageSize)
      .sort(sortOptions);

    const totalEvents = await Event.countDocuments(query);

    const isNext = totalEvents > skipAmount + events.length;

    return { events, isNext };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}

export const getEventById = async (id: string) => {
  try {
    await connectToDatabase();

    const event = await Event.findById(id);

    return event;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getEventBySlug = async (slug: string) => {
  try {
    await connectToDatabase();

    const event = await Event.findOne({ slug });

    return event;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteEvent = async (eventId: string, path: string) => {
  try {
    await connectToDatabase();

    const event = await Event.findByIdAndDelete(eventId);
    if (!event) {
      return { error: "Event not found" };
    }

    const mediaToDelete: string[] = [];
    event.media.forEach((image: any) => {
      mediaToDelete.push(image.publicId);
    });
    mediaToDelete.push(event.imagePublicId);

    await cloudinary.api.delete_resources(mediaToDelete);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
