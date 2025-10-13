const express = require("express");
const router = express.Router();
const saleController = require("../controller/sale");

router.get("/", saleController.getSales);
router.post("/", saleController.addSale);
router.put("/:id", saleController.updateSale);
router.delete("/:id", saleController.deleteSale);

module.exports = router;
