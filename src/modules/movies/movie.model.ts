import mongoose, { model } from "mongoose";
import { TMovie, TReview } from "./movie.interface";
const { Schema } = mongoose;

const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String },
  isDeleted: { type: Boolean },
  viewCount: { type: Number },
});

export const movie = model<TMovie>("Movie", movieSchema);
