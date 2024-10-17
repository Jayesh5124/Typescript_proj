import { BookManager } from './book';
import { AuthorManager } from './author';
import { MemberManager } from './libraryMember';

// Initialize managers
const bookManager = new BookManager();
const authorManager = new AuthorManager();
const memberManager = new MemberManager();

// Adding authors
const author1 = authorManager.addAuthor('George Orwell', 'English novelist and essayist.');
const author2 = authorManager.addAuthor('J.K. Rowling', 'British author, best known for the Harry Potter series.');

// Adding books
bookManager.addBook('1984', author1.id, 5);
bookManager.addBook('Animal Farm', author1.id, 3);
bookManager.addBook('Harry Potter and the Philosopher\'s Stone', author2.id, 10);

// Adding library members
const member1 = memberManager.addMember('Alice Johnson');
const member2 = memberManager.addMember('Bob Smith');

// Display authors, books, and members
console.log('Authors:', authorManager.getAuthors());
console.log('Books:', bookManager.getBooks());
console.log('Library Members:', memberManager.getMembers());

// Borrowing books
const borrowResult1 = bookManager.borrowBook(1);
console.log(borrowResult1.message);
if (borrowResult1.success) {
    memberManager.borrowBook(member1.id, bookManager.getBooks()[0]);
}

// Check borrowed books
console.log('Library Members After Borrowing:');
memberManager.getMembers().forEach(member => {
    console.log(`Member: ${member.name}, Borrowed Books: ${member.borrowedBooks.map(b => b.title).join(', ')}`);
});
