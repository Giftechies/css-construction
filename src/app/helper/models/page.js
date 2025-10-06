const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    shortcontent: { type: String, required: true, trim: true, maxlength: 300 },
    content: { type: String, required: true },
    pageimage: { type: String, required: true },
    imagealt: { type: String, required: true, trim: true },
    metatitle: { type: String, required: true, trim: true, maxlength: 70 },
    metadiscription: { type: String, required: true, trim: true, maxlength: 160 },

    // ✅ New field to link category
    category: { type: mongoose.Schema.Types.ObjectId, ref: "serviceCategory", required: true },
  },
  { timestamps: true }
);

const pageModel = mongoose.models.Page || mongoose.model("Page", pageSchema);
export default pageModel;
