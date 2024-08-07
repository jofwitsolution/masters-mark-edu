import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name cannot be empty"),
  email: z.string().email("Email is invalid"),
  subject: z.string().min(2, "Subject cannot be empty"),
  phone: z.string().optional(),
  message: z.string().min(2, "Message is required"),
});
