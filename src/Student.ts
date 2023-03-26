const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    chatid:{
      type: String,
      required: true,
    } ,
    age: {
        type: String,
        required: true,
    },  
    address: {
        type: String,
        required: true,
    },
    parentPhone: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);