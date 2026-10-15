import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
};

export const createBook = async (book) => {
    const BookId = await bookModel.insert(book);
    return BookId;
};

export const updateBook = async(book) => {
    const updatedBook = await bookModel.update(book);
    return updatedBook;
}