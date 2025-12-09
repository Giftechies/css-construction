// models/User.js

import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Crucial for using email as the unique identifier
    trim: true,
  },
  password: {
    type: String,
    required: false, // Not required for OTP-based users
    default:'css-admin01'
  },
  firstName: {
    type: String,
    required: false, // Optional, but good for personalization
  },
  lastName: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: false,
  },
  // We can track if the user has successfully logged in via OTP at least once
  isVerified: {
    type: Boolean,
    default: false,
  },
  // Add an array to link Orders to the User
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    default:[]
  }],
   role: {
    type: String,
    enum: ['customer', 'admin', 'superadmin'], // Define your roles clearly
    default: 'customer', // All silently created users are customers by default
    required: true,
  },
}, { timestamps: true });

const userModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default userModel;