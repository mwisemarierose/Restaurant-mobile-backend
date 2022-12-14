import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    cost: {
      type: String,
      trim: true,
      required: true,
    },
    quantity: {
      type: Number,
      default:1
    },
    desc: {
      type: String,
      trim: true,
      required: true,
    },
    thumb: String,
  },
  { timestamps: true }
);

const food = model('food', foodSchema);

export default food;
