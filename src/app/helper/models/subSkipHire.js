const mongoose = require("mongoose");

const subSkipHireSchema = new mongoose.Schema(
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
    shortContent: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300, // ✅ helps control excerpt length
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
      trim: true,
    },
    metaTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 70, // ✅ standard SEO title limit
    },
    metaDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160, // ✅ standard SEO description limit
    },
  
  },
  { timestamps: true } // ✅ adds createdAt and updatedAt automatically
);

// Avoid OverwriteModelError in Next.js Hot Reload
const SubSkipHireModel =
  mongoose.models.SubSkipHire || mongoose.model("SubSkipHire", subSkipHireSchema);
export default SubSkipHireModel;
