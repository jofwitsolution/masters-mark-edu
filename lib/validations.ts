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
  content: z.string().min(100, "Post cannot be less than 100 char."),
  organizer: z.string().optional(),
  venue: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
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
