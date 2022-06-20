import { Injectable } from '@nestjs/common';
import books from 'src/data/books';
import { Book, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {

    books: Partial<Book>[]
    constructor() {
        this.books = books
    }

    async findMany() {
        return this.books
    }

    async findById(id: number) {
        return this.books.filter((book) => book.id === id)[0]
    }

    async findByAuthorId(authorId: number) {
        return this.books.filter((book) => book.author === authorId)[0];
    }

    async createBook(book: CreateBookInput) {
        let bookObject = {id: this.books.length, ...book }
        this.books = [bookObject, ...this.books]
        return bookObject;
    }
}
