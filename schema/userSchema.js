const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : false
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("UserName",userSchema)

