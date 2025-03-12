import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/library-controller.js";
import { remoteUpload } from "../middlewares/upload.js";

const LibraryRouter = Router();

LibraryRouter.post('/book',remoteUpload.single('coverImage'), addBook);
LibraryRouter.get('/book', getAllBooks);
LibraryRouter.get('/book/:id', getBookById);
LibraryRouter.patch('/book/:id', updateBook);
LibraryRouter.delete('/book/:id', deleteBook);

export default LibraryRouter;
