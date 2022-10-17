
import mongoose from 'mongoose';
import validator from 'validator';
const { isEmail } = validator;
const { Schema, model } = mongoose;

    
const userSchema = new Schema({
    username: {
      type: String,
      required: [true, 'Please! provide username.']
    },
    email: {
      type: String,
      required: [true, 'Please! provide your email.'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please! provide valid email']
    },

    password: {
      type: String,
      required: [true, 'Please! provide password'],
      minlength: 8,
      select: false
    },
   
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false
    },
   
    role: {
      type: String,
      enum: ['user', 'admin','manager'],
      default: 'user'
    }
  });

  const User = model('User', userSchema);

export default User;