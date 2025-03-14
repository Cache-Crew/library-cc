import Joi from "joi";

export const addBookValidator = Joi.object ({
  bookTitle: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.number().required(),
  genre: Joi.string().required(),
  image: Joi.string(), // URL to book cover image
  description: Joi.string(), // Brief summary of the book
})