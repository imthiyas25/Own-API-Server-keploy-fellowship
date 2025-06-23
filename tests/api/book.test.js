const request = require('supertest');
const app = require('../../server');
const db = require('../setup/db');

beforeAll(async () => await db.connect());
afterAll(async () => await db.closeDatabase());
afterEach(async () => await db.clearDatabase());

describe('Book API', () => {
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books') // ✅ FIXED
      .send({
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988
      })
      .expect(201);

    expect(res.body.title).toBe('The Alchemist');
    expect(res.body.author).toBe('Paulo Coelho');
  });

  it('should fetch all books', async () => {
    await request(app).post('/api/books').send({ title: '1984', author: 'Orwell', year: 1949 });
    const res = await request(app).get('/api/books').expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should update a book', async () => {
    const createRes = await request(app)
      .post('/api/books')
      .send({ title: 'Old Title', author: 'Some Author', year: 1999 });

    const bookId = createRes.body._id;

    const updateRes = await request(app)
      .put(`/api/books/${bookId}`)
      .send({ title: 'New Title' })
      .expect(200);

    expect(updateRes.body.title).toBe('New Title');
    expect(updateRes.body.author).toBe('Some Author'); // unchanged
  });

  it('should delete a book', async () => {
    const createRes = await request(app)
      .post('/api/books')
      .send({ title: 'To Delete', author: 'Author', year: 2000 });

    const bookId = createRes.body._id;

    const deleteRes = await request(app)
      .delete(`/api/books/${bookId}`)
      .expect(200);

    expect(deleteRes.body.message).toBe('Book deleted');
  });
});
