import { Schema, models, model, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = models.Event || model("Event", EventSchema);

export default Event;
