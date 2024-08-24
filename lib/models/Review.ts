import { Schema, models, model, Document } from "mongoose";

export interface IReview extends Document {
  _id: string;
  name: string;
  comment: string;
  position: string;
  rating: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

const Review = models.Review || model("Review", ReviewSchema);

export default Review;
