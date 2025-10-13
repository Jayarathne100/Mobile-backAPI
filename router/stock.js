const express = require("express");
const router = express.Router();
const stockController = require("../controller/stock");

router.get("/", stockController.getStocks);
router.post("/", stockController.addStock);
router.put("/:id", stockController.updateStock);
router.delete("/:id", stockController.deleteStock);

// Increase/decrease quantity
router.put("/:id/increase", stockController.increaseStock);
router.put("/:id/decrease", stockController.decreaseStock);

module.exports = router;


