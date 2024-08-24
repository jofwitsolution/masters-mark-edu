import { Schema, models, model, Document } from "mongoose";

export interface IReview extends Document {
  _id: string;
  name: string;
  comment: string;
  occupation: string;
  rating: string;
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Review = models.Review || model("Review", ReviewSchema);

export default Review;
