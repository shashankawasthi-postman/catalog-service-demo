/**
 * Catalog Service - dummy demo implementation
 * Demo microservice for managing a product catalog.
 *
 * In-memory CRUD API matching openapi.yaml. No real persistence or auth -
 * for demo purposes only.
 */
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4006;

let products = [
  {
    "id": "pr-1",
    "name": "Wireless Mouse",
    "category": "Peripherals",
    "price": 24.99,
    "inStock": true
  },
  {
    "id": "pr-2",
    "name": "Mechanical Keyboard",
    "category": "Peripherals",
    "price": 79.99,
    "inStock": true
  }
];

function nextId() {
  return 'p-' + (Math.floor(Math.random() * 90000) + 10000);
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const found = products.find((r) => r.id === req.params.id);
  if (!found) return res.status(404).json({ error: 'product not found' });
  res.json(found);
});

app.post('/products', (req, res) => {
  const created = { id: nextId(), ...req.body };
  products.push(created);
  res.status(201).json(created);
});

app.put('/products/:id', (req, res) => {
  const idx = products.findIndex((r) => r.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'product not found' });
  products[idx] = { ...products[idx], ...req.body, id: req.params.id };
  res.json(products[idx]);
});

app.delete('/products/:id', (req, res) => {
  const idx = products.findIndex((r) => r.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'product not found' });
  products.splice(idx, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Catalog Service demo listening on http://localhost:${PORT}`);
});

module.exports = app;
