import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  name: string;
  role: string;
  slug: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const TeamSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    slug: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const Team = models.Team || model("Team", TeamSchema);

export default Team;
