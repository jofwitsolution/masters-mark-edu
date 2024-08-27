import { Schema, models, model, Document } from "mongoose";

export interface IMedia extends Document {
  _id: string;
  url: string;
  publicId: string;
  createdAt: Date;
  updatedAt: Date;
}

const MediaSchema = new Schema(
  {
    url: String,
    publicId: String,
  },
  { timestamps: true }
);

const Media = models.Media || model("Media", MediaSchema);

export default Media;
