import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  postcode: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

const Postcode = mongoose.models.Postcode || mongoose.model("Postcode", postSchema);

export default Postcode;
