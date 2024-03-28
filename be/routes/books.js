const express = require("express");
const books = express.Router();
const BooksModel = require("../modules/books");

books.get("/books", async (request, response) => {
  const { page = 1, pageSize = 10 } = request.query;
  try {
    const books = await BooksModel.find()
      .limit(pageSize)
      .skup((page - 1) * pageSize)
      .sort({ pubDate: -1 });

    const totalBooks = await BooksModel.countDocuments();
    response.status(200).send({
      currentPage: page,
      pageSize,
      totalPages: Math.ceil(totalBooks / pageSize),
      books,
    });
  } catch (e) {
    response.status(500).send({
      statusCode: 500,
      message: "internal server error",
    });
  }
});

books.post("/books/create", async (request, response) => {
  const newBook = new BooksModel({
    author: request.body.author,
    title: request.body.title,
    editor: request.body.editor,
    cover: request.body.cover,
    price: request.body.price,
    description: request.body.description,
    pubDate: new Date(request.body.pubDate),
    isFeatured: request.body.isFeatured,
  });
  try {
    await newBook.save();
    response.status(201).send({
      statusCode: 201,
      payload: "Book saved successfully",
    });
  } catch (e) {
    response.status(500).send({
      statusCode: 500,
      message: "internal server error",
    });
  }
});

module.exports = books;
