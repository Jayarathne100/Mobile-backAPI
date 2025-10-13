// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import routes
const productRoutes = require("./router/product");
const saleRoutes = require("./router/sale");
const stockRoutes = require("./router/stock");
// const authRoutes = require("./router/authRouter");
const categoryRoutes = require("./router/category");
const userRouter = require("./router/user");
const expenseRoutes = require("./router/expense");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/stocks", stockRoutes);
// app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRouter);
app.use("/api/expenses", expenseRoutes);

app.use("/api/auth", require("./router/auth"));

// protected example route
const auth = require("./middleware/authmiddleware");
app.get("/api/protected", auth, (req, res) => {
  res.json({ message: "You accessed a protected route!", user: req.user });
});

// MongoDB connection
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("❌ Error: MONGO_URI is not defined in .env");
  process.exit(1); // Stop the server
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("✅ MongoDB connected");

    // Start server only after DB connection
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
