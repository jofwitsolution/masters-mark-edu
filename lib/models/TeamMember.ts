import { Schema, models, model, Document } from "mongoose";

export interface ITeamMember extends Document {
  _id: string;
  name: string;
  bio: string;
  role: string;
  rank: string;
  slug: string;
  imageUrl: string;
  imagePublicId: string;
  createdAt: Date;
  updatedAt: Date;
}

const TeamMemberSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    role: { type: String, required: true },
    rank: { type: Number, default: 10 },
    slug: { type: String, required: true },
    imageUrl: { type: String },
    imagePublicId: { type: String },
  },
  { timestamps: true }
);

const TeamMember = models.TeamMember || model("TeamMember", TeamMemberSchema);

export default TeamMember;
