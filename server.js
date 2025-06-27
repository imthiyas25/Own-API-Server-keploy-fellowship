const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', require('./routes/bookRoutes'));

// Swagger Docs
require('./swagger')(app); // 👈 Mounts Swagger UI and /api-docs-json

// Connect DB and start server (skip during tests)
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('💾 MongoDB Connected');
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
}

// Export app for tests
module.exports = app;
