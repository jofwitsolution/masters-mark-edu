"use server";

import { revalidatePath } from "next/cache";
import { createSlug } from "../utils";
import { connectToDatabase } from "../mongoose";
import { cloudinary } from "../helpers/cloudinary";
import TeamMember from "../models/TeamMember";

export const createTeamMember = async ({
  name,
  role,
  bio,
  rank,
  path,
  image,
}: {
  name: string;
  role: string;
  bio: string;
  rank: string;
  path: string;
  image: string;
}) => {
  try {
    await connectToDatabase();

    if (!image) {
      return { error: "Invalid profile image" };
    } else {
      const uploadResult = await cloudinary.uploader.upload(image as string, {
        folder: "profile-images",
      });

      const slug = createSlug(name, 5);

      await TeamMember.create({
        name,
        slug,
        role,
        rank,
        bio,
        imageUrl: uploadResult.secure_url,
        imagePublicId: uploadResult.public_id,
      });

      revalidatePath(path);
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const editTeamMember = async ({
  memberId,
  name,
  role,
  rank,
  bio,
  image,
  path,
}: {
  memberId: string;
  name: string;
  role: string;
  rank: string;
  bio: string;
  image: string;
  path: string;
}) => {
  try {
    await connectToDatabase();

    const member = await TeamMember.findById(memberId);
    if (!member) {
      return { error: "Member not found" };
    }

    if (image) {
      const uploadResult = await cloudinary.uploader.upload(image as string, {
        folder: "team-member-images",
      });
      member.imageUrl = uploadResult.secure_url;
      member.imagePublicId = uploadResult.public_id;
    }

    member.name = name;
    member.slug = createSlug(name, 5);
    member.role = role;
    member.rank = rank;
    member.bio = bio;

    await member.save();

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getTeamMembers = async () => {
  try {
    await connectToDatabase();

    const members = await TeamMember.find({});

    return { members };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getMemberById = async (id: string) => {
  try {
    await connectToDatabase();

    const member = await TeamMember.findById(id);

    return member;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const getMemberBySlug = async (slug: string) => {
  try {
    await connectToDatabase();

    const member = await TeamMember.findOne({ slug });

    return member;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteMember = async (memberId: string, path: string) => {
  try {
    await connectToDatabase();

    const member = await TeamMember.findByIdAndDelete(memberId);
    if (!member) {
      return { error: "Team member not found" };
    }

    await cloudinary.uploader.destroy(member.imagePublicId);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
