"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorManager = void 0;
var AuthorManager = /** @class */ (function () {
    function AuthorManager() {
        this.authors = [];
        this.nextId = 1;
    }
    AuthorManager.prototype.addAuthor = function (name, bio) {
        var newAuthor = {
            id: this.nextId++,
            name: name,
            bio: bio,
        };
        this.authors.push(newAuthor);
        return newAuthor;
    };
    AuthorManager.prototype.getAuthors = function () {
        return this.authors;
    };
    return AuthorManager;
}());
exports.AuthorManager = AuthorManager;
