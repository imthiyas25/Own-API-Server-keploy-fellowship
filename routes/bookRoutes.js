const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.post('/', async (req, res) => {
  console.log("🔥 Received POST data:", req.body); // 👈 this is critical

  try {
    const { title, author, year } = req.body;

    const newBook = new Book({ title, author, year });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    console.error("❌ Error saving book:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

module.exports = router;

// PUT /api/books/:id → Update a book
router.put('/:id', async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/books/:id → Delete a book
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

