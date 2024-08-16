import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  imageUrl: string;
  imagePublicId: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String },
    imagePublicId: { type: String },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);

export default Post;
