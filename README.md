# Own-API-Server-keploy-fellowship

# 📚 Book API Server

A simple custom API for managing books using Node.js, Express, and MongoDB Atlas.

---

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas (Cloud)
- Mongoose
- curl (for testing)

---

## 🚀 How to Run

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root folder and add:

```
MONGO_URI=your_mongodb_connection_url
PORT=5000
```

3. Start the server:

```bash
npm start
```

---

## 📡 API Endpoints

### ✅ `GET /api/books`
Fetch all books.

**Response:**
```json
[
  {
    "_id": "abc123",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937
  }
]
```

---

### ✅ `POST /api/books`
Add a new book.

**Request Body:**
```json
{
  "title": "1984",
  "author": "George Orwell",
  "year": 1949
}
```

---

### ✅ `PUT /api/books/:id`
Update an existing book.

**Request Body:**
```json
{
  "title": "New Title",
  "author": "New Author",
  "year": 2024
}
```

---

### ✅ `DELETE /api/books/:id`
Delete a book by ID.

**Response:**
```json
{
  "message": "Book deleted"
}
```

---

## 🧪 curl Test Commands

```bash
# GET all books
curl http://localhost:5000/api/books

# POST a book
curl -X POST http://localhost:5000/api/books -H "Content-Type: application/json" -d "{\"title\":\"The Hobbit\", \"author\":\"J.R.R. Tolkien\", \"year\":1937}"

# PUT (update) a book
curl -X PUT http://localhost:5000/api/books/<book_id> -H "Content-Type: application/json" -d "{\"title\":\"Updated Title\", \"author\":\"Updated Author\", \"year\":2024}"

# DELETE a book
curl -X DELETE http://localhost:5000/api/books/<book_id>
```

Replace `<book_id>` with the actual `_id` you get from GET request.

---

## 🌐 Frontend (Optional)

This project is backend-only. If you want to build a simple frontend, consider using:

- HTML + JS Fetch API
- React + Axios

---

## 📂 Folder Structure

```
my-api-server/
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── tests/
│   ├── api/
│   │   └── book.test.js
│   └── setup/
│       └── db.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md

```

---

## ✅ Status

✅ All 4 API endpoints implemented  
✅ Tested with curl  
✅ Connected to MongoDB Atlas  
📝 API documented in this README  
📦 Ready for GitHub submission

---


## 🧪 Testing & Coverage

### ✅ Testing Tools Used

- **Jest** — JavaScript testing framework  
- **Supertest** — for HTTP assertions  
- **mongodb-memory-server** — to run integration tests without touching real DB  

---

### 🧪 Types of Tests Written

- **Unit Tests** – testing database/model logic and route logic (mocked)  
- **Integration Tests** – full CRUD tests against an in-memory MongoDB  
- **API Tests** – endpoint behavior verification (POST, GET, PUT, DELETE)  

---

### 📈 Test Coverage Achieved

- ✅ **Statements:** 79%+  
- ✅ **Branches:** 37%+  
- ✅ **Functions:** 70%+  
- ✅ **Lines:** 80%+  

> ✅ Meets the required 70%+ minimum for assignment.

---

### 🖼️ Coverage Report Screenshot
![API](.assets/postman get api call.png)

![Test Coverage Report](./assets/test.png) 

![MongoDb database](./assets/mongodb.png)


---

### 📦 Run Tests Locally

```bash
npm run test          # run all tests
npm run test:coverage # run tests with coverage report

# Own-API-Server-keploy-fellowship

