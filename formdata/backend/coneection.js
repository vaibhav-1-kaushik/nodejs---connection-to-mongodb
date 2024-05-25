const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/formdata");

const productsh = new   mongoose.Schema({
    username:String,
    password:Number
})

module.exports= mongoose.model("users",productsh);