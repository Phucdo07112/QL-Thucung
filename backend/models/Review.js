import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    petId: {
      type: mongoose.Types.ObjectId,
      ref: "Pet",
    },
    accessoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Accessory",
    },
    username: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);