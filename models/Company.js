const mongoose = require("mongoose");

// Define the schema
const companySchema = new mongoose.Schema({
  name: String,
});

// Create a model based on the schema
module.exports = mongoose.model("Company", companySchema);
