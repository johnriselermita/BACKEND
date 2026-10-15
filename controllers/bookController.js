import * as bookService from '../services/bookService.js';

export const getAllBooks = async (req, res) => {
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
};

export const createBook = async (req, res) => {
    const {name, author} = req.body
    const book = {name, author};
    
    try {
        const bookId = await bookService.createBook(req.body);
        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            error: "internal server error",
        });
    }
};

export const editBook = async(req,res) =>{
    const { name, author } = req.body;
    const { id } = req.params;
    const book = { id, name, author };

    try{
        const updatedBook = await bookService.updateBook(book)
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch(e) {
        console.log(e);
        req.status(500).json({
            error: "internal Server Error"
        });
    }
}