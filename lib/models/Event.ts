import { Schema, models, model, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  slug: string;
  content: string;
  organizer: string;
  venue: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  imagePublicId: string;
  media: [{ url: string; publicId: string }];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String },
    organizer: { type: String },
    venue: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    imageUrl: { type: String },
    imagePublicId: { type: String },
    media: [{ url: String, publicId: String }],
  },
  { timestamps: true }
);

const Event = models.Event || model("Event", EventSchema);

export default Event;
