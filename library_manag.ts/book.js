"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
        this.nextId = 1;
    }
    BookManager.prototype.addBook = function (title, authorId, availableCopies) {
        var newBook = {
            id: this.nextId++,
            title: title,
            authorId: authorId,
            availableCopies: availableCopies,
        };
        this.books.push(newBook);
        return newBook;
    };
    BookManager.prototype.getBooks = function () {
        return this.books;
    };
    BookManager.prototype.borrowBook = function (bookId) {
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!book) {
            return { success: false, message: 'Book not found.' };
        }
        if (book.availableCopies <= 0) {
            return { success: false, message: 'No copies available for borrowing.' };
        }
        book.availableCopies--;
        return { success: true, message: "You have borrowed \"".concat(book.title, "\".") };
    };
    BookManager.prototype.getAuthorName = function (bookId, authorManager) {
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (book) {
            var author = authorManager.getAuthors().find(function (a) { return a.id === book.authorId; });
            return author ? author.name : null;
        }
        return null;
    };
    return BookManager;
}());
exports.BookManager = BookManager;
