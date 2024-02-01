const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: false},
    image:{type: String, required: false},
    id: {type: String}
})

module.exports = mongoose.model("User", userSchema)