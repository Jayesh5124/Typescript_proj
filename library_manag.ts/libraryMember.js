"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberManager = void 0;
var MemberManager = /** @class */ (function () {
    function MemberManager() {
        this.members = [];
        this.nextId = 1;
    }
    MemberManager.prototype.addMember = function (name) {
        var newMember = {
            id: this.nextId++,
            name: name,
            membershipDate: new Date(),
            borrowedBooks: [],
        };
        this.members.push(newMember);
        return newMember;
    };
    MemberManager.prototype.getMembers = function () {
        return this.members;
    };
    MemberManager.prototype.borrowBook = function (memberId, book) {
        var member = this.members.find(function (m) { return m.id === memberId; });
        if (!member) {
            return { success: false, message: 'Member not found.' };
        }
        member.borrowedBooks.push(book);
        return { success: true, message: "".concat(member.name, " has borrowed \"").concat(book.title, "\".") };
    };
    return MemberManager;
}());
exports.MemberManager = MemberManager;
