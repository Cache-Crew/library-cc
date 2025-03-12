import { LibraryModel } from '../models/library-model.js';
import { addBookValidator } from '../validators/library-validators.js';


// validate information
export const addBook = async (req, res, next) => {
    try {
        const { error, value } = addBookValidator.validate({...req.body,
            image: req.file.filename
           }, { abortEarly: false });
        if (error) {
            return res.status(422).json(error);
        }
        // save information in database
        const result = await LibraryModel.create(value);
        // return response
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

// get all Books
export const getAllBooks = async (req, res, next) => {
    try {
        const allbooks = await LibraryModel.find();
        res.status(200).json(allbooks);
    } catch (error) {
        next(error);
    }

}

// get specific Books
export const getBookById = async (req, res, next) => {
    try {
        const uniqueBook = await LibraryModel.findById(req.params.id);
        if (!uniqueBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(uniqueBook);
    } catch (error) {
        next(error)
    }
};
// update book
export const updateBook = async (req, res, next) => {
    try {
        const book = await LibraryModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
};
    // delete book
export const deleteBook = async(req, res, next) => {
    try {
        const deletedbook = await LibraryModel.findByIdAndDelete(req.params.id);
        if (!deletedbook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: `${deletedbook.title} deleted!`});
    } catch (error) {
        next(error);
    }
  }