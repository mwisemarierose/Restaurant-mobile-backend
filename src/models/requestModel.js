import mongoose from "mongoose";
const { Schema, model } = mongoose;

const requestSchema= new Schema({
    Name:{
           type:String,
    },
    Email:{
        type:String,
    },
   phoneNumber:{
        type:String,
    },
    Address:{
        type:String,
    },
    Description:{
        type:String,
        },
    Status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
          }
    
})

const Request = model('Request', requestSchema);

export default Request;