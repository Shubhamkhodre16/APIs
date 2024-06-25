const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri = "mongodb+srv://shubhgurjar963:ZtDGQJ2AejxLY4EG@productapi.jbrejji.mongodb.net/ProductAPI?retryWrites=true&w=majority&appName=ProductAPI"

const connectDB = () =>{
    console.log("teee")
    return mongoose.connect(uri)
}

module.exports = connectDB;