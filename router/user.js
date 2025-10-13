const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

// GET all users
router.get("/", userController.getUsers);

// POST add new user
router.post("/", userController.addUser);

// DELETE user
router.delete("/:id", userController.deleteUser);

module.exports = router;
