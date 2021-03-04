import mongoose from "mongoose";

export const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    items: [
      {
        body: String,
        completed: Boolean,
      },
    ],
  },
  { timestamps: true }
);
