// routes/categoryRoutes.js
const express = require("express");
const {createCategory, getCategories, updateCategory,deleteCategory} = require("../controller/category");

const router = express.Router();

router.post("/", createCategory);     // Create
router.get("/", getCategories);       // Read
router.put("/:id", updateCategory);   // Update
router.delete("/:id", deleteCategory); // Delete

module.exports = router;
