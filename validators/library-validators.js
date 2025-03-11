import Joi from "joi";

export const addBooksValidator = Joi.object ({
  title: Joi.string().required(),
  author: Joi.string().required(),
  publishedYear: Joi.number().required(),
  genre: Joi.string().required(),
  copiesAvailable: Joi.number().required(), // Number of copies in the library
  coverImage: Joi.string(), // URL to book cover image
  description: Joi.string(), // Brief summary of the book
  publisher: Joi.string(), // Publisher name
})