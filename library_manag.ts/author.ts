export interface Author {
    id: number;
    name: string;
    bio?: string; // Optional biography
}

export class AuthorManager {
    private authors: Author[] = [];
    private nextId: number = 1;

    addAuthor(name: string, bio?: string): Author {
        const newAuthor: Author = {
            id: this.nextId++,
            name,
            bio,
        };
        this.authors.push(newAuthor);
        return newAuthor;
    }

    getAuthors(): Author[] {
        return this.authors;
    }
}
