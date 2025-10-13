const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Controllers
const product = require('./controller/product');
const stock = require('./controller/stock');
const sale = require('./controller/sale');

const authRoutes = require("./controller/auth"); 


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// ---------- CORS ---------- //
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------- PRODUCT ROUTES ---------------- //
app.get('/api/products', (req, res) => {
  product.getProducts(req, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

app.post('/api/products', (req, res) => {
  product.addProduct(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json(result);
  });
});

app.put('/api/products/:id', (req, res) => {
  product.updateProduct(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

app.delete('/api/products/:id', (req, res) => {
  product.deleteProduct(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// ---------------- STOCK ROUTES ---------------- //
app.get('/api/stocks', (req, res) => {
  stock.getStocks(req, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

app.post('/api/stocks', (req, res) => {
  stock.addStock(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json(result);
  });
});

app.put('/api/stocks/:id', (req, res) => {
  stock.updateStock(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

app.delete('/api/stocks/:id', (req, res) => {
  stock.deleteStock(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// ---------------- SALE ROUTES ---------------- //
app.get('/api/sales', (req, res) => {
  sale.getSales(req, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

app.post('/api/sales', (req, res) => {
  sale.addSale(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json(result);
  });
});

app.put('/api/sales/:id', (req, res) => {
  sale.updateSale(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

app.delete('/api/sales/:id', (req, res) => {
  sale.deleteSale(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});


module.exports = app;

