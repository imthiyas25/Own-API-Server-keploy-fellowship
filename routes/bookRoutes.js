const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// POST /api/books → Create a new book
router.post('/', async (req, res) => {
  console.log("🔥 Received POST data:", req.body);

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

// GET /api/books → Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/books/:id → Update a book
router.put('/:id', async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/books/:id → Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
