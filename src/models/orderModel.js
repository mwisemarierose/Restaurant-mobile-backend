import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  
  {
    // orderId: String,
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    quantity: {
      type: [],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = model('Order', orderSchema);

export default Order;