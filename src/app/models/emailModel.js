import mongoose from "mongoose";
const emailSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },

    lastname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    campus: {
      type: String,
      required: true,
      trim: true,
    },

    course: {
      type: String,
      required: true,
      trim: true,
    },

    guidance: {
      type: String,
      required: false,
      trim: true,
    },

    organisation: {
      type: String,
      required: false,
      trim: true,
    },

    learners: {
      type: String,
      required: false,
      trim: true,
    },

    timeline: {
      type: String,
      required: false,
      trim: true,
    },
    
    messages: {
      type: String,
      required: true,
      trim: true,
    },

    emailRole: {
      type: String,
      enum: ["myself", "staff"],
      default: "myself",
    },
  },
  { timestamps: true },
);

const Email = mongoose.models.email || mongoose.model("email", emailSchema);

export default Email;
