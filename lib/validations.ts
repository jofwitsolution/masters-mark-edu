import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name cannot be empty"),
  email: z.string().email("Email is invalid"),
  subject: z.string().min(2, "Subject cannot be empty"),
  phone: z.string().optional(),
  message: z.string().min(2, "Message is required"),
});

export const PostSchema = z.object({
  title: z
    .string()
    .min(5, "Title cannot be less than 5 char.")
    .max(130, "Title cannot exceed 130 char."),
  content: z.string().min(100, "Post cannot be less than 100 char."),
});

export const EventSchema = z.object({
  title: z
    .string()
    .min(5, "Title cannot be less than 5 char.")
    .max(130, "Title cannot exceed 130 char."),
  content: z.string().optional(),
  organizer: z.string().optional(),
  venue: z.string().optional(),
  media: z.array(
    z.object({ url: z.string().optional(), publicId: z.string().optional() })
  ),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

export const MediaSchema = z.object({
  media: z
    .array(
      z.object({ url: z.string().optional(), publicId: z.string().optional() })
    )
    .min(1, "You must upload image before saving"),
});

export const TeamMemberSchema = z.object({
  name: z
    .string()
    .min(5, "Name cannot be less than 5 char.")
    .max(60, "Name cannot exceed 60 char."),
  role: z.string().min(3, "Role cannot be less than 3 char."),
  bio: z.string().optional(),
  rank: z
    .string({
      required_error: "Rank is required",
      invalid_type_error: "Rank is required",
    })
    .min(1, "Rank is required"),
});

export const ReviewSchema = z.object({
  name: z
    .string()
    .min(5, "Name cannot be less than 5 char.")
    .max(60, "Name cannot exceed 60 char."),
  occupation: z
    .string()
    .min(3, "Occupation cannot be less than 3 char.")
    .max(20, "Occupation cannot exceed 20 char."),
  comment: z
    .string()
    .min(3, "Review cannot be less than 20 char.")
    .max(300, "Review cannot exceed 300 char."),
  rating: z
    .string({
      required_error: "Rating is required",
      invalid_type_error: "Rating is required",
    })
    .min(1, "Rating is required"),
});
