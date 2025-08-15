import { Module } from '@nestjs/common';

import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bookDB'),
    BooksModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
