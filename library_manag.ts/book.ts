import { AuthorManager } from './author'; 
export interface Book {
    id: number;
    title: string;
    authorId: number; // References Author
    availableCopies: number;
}

export class BookManager {
    private books: Book[] = [];
    private nextId: number = 1;

    addBook(title: string, authorId: number, availableCopies: number): Book {
        const newBook: Book = {
            id: this.nextId++,
            title,
            authorId,
            availableCopies,
        };
        this.books.push(newBook);
        return newBook;
    }

    getBooks(): Book[] {
        return this.books;
    }

    borrowBook(bookId: number): { success: boolean; message: string } {
        const book = this.books.find(b => b.id === bookId);
        if (!book) {
            return { success: false, message: 'Book not found.' };
        }
        if (book.availableCopies <= 0) {
            return { success: false, message: 'No copies available for borrowing.' };
        }

        book.availableCopies--;
        return { success: true, message: `You have borrowed "${book.title}".` };
    }

    getAuthorName(bookId: number, authorManager: AuthorManager): string | null {
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            const author = authorManager.getAuthors().find(a => a.id === book.authorId);
            return author ? author.name : null;
        }
        return null;
    }
}
