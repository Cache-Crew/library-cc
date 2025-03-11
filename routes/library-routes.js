import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/library-controller.js";

const LibraryRouter = Router();

LibraryRouter.post('/book', addBook);
LibraryRouter.get('/book', getAllBooks);
LibraryRouter.get('/book/:id', getBookById);
LibraryRouter.patch('/book/:id', updateBook);
LibraryRouter.delete('/book/:id', deleteBook);

export default LibraryRouter;
