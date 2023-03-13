const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);