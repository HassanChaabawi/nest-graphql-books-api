import { Injectable } from '@nestjs/common';
import authors from 'src/data/authors';
import { Author } from './author.schema';

@Injectable()
export class AuthorService {

    authors: Partial<Author>[]
    constructor() {
        this.authors = authors
    }

    async findById(id) {
        const result = this.authors.filter((author) => author.id === id)
        return result.length ? result[0] : null
    }

    async findMany() {
        return this.authors
    }
}
