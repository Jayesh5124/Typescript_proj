"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var author_1 = require("./author");
var libraryMember_1 = require("./libraryMember");
// Initialize managers
var bookManager = new book_1.BookManager();
var authorManager = new author_1.AuthorManager();
var memberManager = new libraryMember_1.MemberManager();
// Adding authors
var author1 = authorManager.addAuthor('George Orwell', 'English novelist and essayist.');
var author2 = authorManager.addAuthor('J.K. Rowling', 'British author, best known for the Harry Potter series.');
// Adding books
bookManager.addBook('1984', author1.id, 5);
bookManager.addBook('Animal Farm', author1.id, 3);
bookManager.addBook('Harry Potter and the Philosopher\'s Stone', author2.id, 10);
// Adding library members
var member1 = memberManager.addMember('Alice Johnson');
var member2 = memberManager.addMember('Bob Smith');
// Display authors, books, and members
console.log('Authors:', authorManager.getAuthors());
console.log('Books:', bookManager.getBooks());
console.log('Library Members:', memberManager.getMembers());
// Borrowing books
var borrowResult1 = bookManager.borrowBook(1);
console.log(borrowResult1.message);
if (borrowResult1.success) {
    memberManager.borrowBook(member1.id, bookManager.getBooks()[0]);
}
// Check borrowed books
console.log('Library Members After Borrowing:');
memberManager.getMembers().forEach(function (member) {
    console.log("Member: ".concat(member.name, ", Borrowed Books: ").concat(member.borrowedBooks.map(function (b) { return b.title; }).join(', ')));
});
