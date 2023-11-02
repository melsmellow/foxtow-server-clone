const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: false,
  },
});

// Create a model based on the schema
module.exports = mongoose.model("User", userSchema);
