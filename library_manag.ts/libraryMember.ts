import { Book } from './book';

export interface LibraryMember {
    id: number;
    name: string;
    membershipDate: Date;
    borrowedBooks: Book[]; // Track borrowed books
}

export class MemberManager {
    private members: LibraryMember[] = [];
    private nextId: number = 1;

    addMember(name: string): LibraryMember {
        const newMember: LibraryMember = {
            id: this.nextId++,
            name,
            membershipDate: new Date(),
            borrowedBooks: [],
        };
        this.members.push(newMember);
        return newMember;
    }

    getMembers(): LibraryMember[] {
        return this.members;
    }

    borrowBook(memberId: number, book: Book): { success: boolean; message: string } {
        const member = this.members.find(m => m.id === memberId);
        if (!member) {
            return { success: false, message: 'Member not found.' };
        }

        member.borrowedBooks.push(book);
        return { success: true, message: `${member.name} has borrowed "${book.title}".` };
    }
}
