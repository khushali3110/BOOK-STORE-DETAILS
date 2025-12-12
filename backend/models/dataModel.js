const { Schema, model } = require("mongoose");


const dataSchema = new Schema({
  Name: {
    type: String,
    trim: true,
    required: [true, "category require"],
  },
  title: {
    type: String,
    trim: true,
    required: [true, "category require"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "category require"],
  },
  grid: {
    type: Number,
    trim: true,
    required: [true, "category require"],
  },
  mobile: {
    type: Number,
    trim: true,
    required: [true, "category require"],
  },
});

const Task = model("Task", dataSchema);
module.exports =  Task