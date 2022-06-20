import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { AuthorService } from 'src/author/author.service';

@Module({
  providers: [BookResolver, BookService, AuthorService]
})
export class BookModule {}
