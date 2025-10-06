const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true, // ✅ ensures no duplicate slugs (SEO-friendly URLs)
      lowercase: true,
      trim: true,
    },
    shortcontent: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300, // ✅ helps control excerpt length
    },
    content: {
      type: String,
      required: true,
    },
    pageimage: {
      type: String,
      required: true,
    },
    imagealt: {
      type: String,
      required: true,
      trim: true,
    },
    metatitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 70, // ✅ standard SEO title limit
    },
    metadiscription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160, // ✅ standard SEO description limit
    },
  
  },
  { timestamps: true } // ✅ adds createdAt and updatedAt automatically
);

// Avoid OverwriteModelError in Next.js Hot Reload
const pageModel =
  mongoose.models.SubSkipHire || mongoose.model("Page", pageSchema);
export default pageModel;
