const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
  Name: String,
  Weight: Number,
  Cost: Number
})
module.exports = mongoose.model("Horse", horseSchema)