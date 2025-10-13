const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  modelName: { type: String, required: true },
  quantity: { type: Number, required: true },   
  remainQ: { type: Number, required: true },    
  price: { type: Number, required: true }
}, { timestamps: true });


module.exports = mongoose.model("Stock", stockSchema);
