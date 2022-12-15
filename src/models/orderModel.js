import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  
  {
    product:[{
      productId:{
        type:String,
      },
      name:{
        type:String,
      },
      quantity:{
        type:String,
      },
      desc:{
        type:String,
      },
    }],
   
    
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
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