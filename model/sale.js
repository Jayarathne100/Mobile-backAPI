const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  modelName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Sale", SaleSchema);
