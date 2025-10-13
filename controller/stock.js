const Stock = require("../model/stock")

exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addStock = async (req, res) => {
  try {
    const { brandName, modelName, quantity, price } = req.body;
    const stock = new Stock({
      brandName,
      modelName,
      quantity,
      remainQ: quantity, 
      price
    });
    await stock.save();
    res.status(201).json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStock = async (req, res) => {
  try {
    const { brandName, modelName, quantity, price } = req.body;
    const stock = await Stock.findByIdAndUpdate(
      req.params.id,
      { brandName, modelName, quantity, price },
      { new: true }
    );
    if (!stock) return res.status(404).json({ error: "Stock not found" });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) return res.status(404).json({ error: "Stock not found" });
    res.json({ message: "Stock deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.decreaseStock = async (req, res) => {
  try {
    const { quantity } = req.body;
    const stock = await Stock.findById(req.params.id);
    if (!stock) return res.status(404).json({ error: "Stock not found" });

    if (stock.remainQ < quantity) {
      return res.status(400).json({ error: "Not enough stock available" });
    }

    stock.remainQ -= quantity;
    await stock.save();
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.increaseStock = async (req, res) => {
  try {
    const { quantity } = req.body;
    const stock = await Stock.findById(req.params.id);
    if (!stock) return res.status(404).json({ error: "Stock not found" });

    stock.remainQ += quantity;
    await stock.save();
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
