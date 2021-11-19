const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Name of Horse can not be blank"]
    },
    Cost: {
        type: Number,
        required: [true, "Horse cost can not be blank"]
    },
    Weight: {
        type: Number,
        required: [true, "Weight of the Horse is required"]

    }
})
module.exports = mongoose.model("Horse", horseSchema)