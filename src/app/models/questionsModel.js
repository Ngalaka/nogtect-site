import mongoose from "mongoose";
const questionsSchema = new mongoose.Schema(
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
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: false,
      trim: true,
    },

    question: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true },
);

const Questions = mongoose.models.questions || mongoose.model("questions", questionsSchema);

export default Questions;
