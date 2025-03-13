import Joi from "joi";

export const addBookValidator = Joi.object ({
  bookTitle: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.string().required(),
  genre: Joi.string().required(),
  coverImage: Joi.string(), // URL to book cover image
  description: Joi.string(), // Brief summary of the book
})