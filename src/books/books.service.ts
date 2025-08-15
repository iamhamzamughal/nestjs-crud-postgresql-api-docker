import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './entities/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBook: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBook);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book | null> {
    const book = await this.bookModel.findOne({ _id: id }).exec();
    if (!book) {
      throw new NotFoundException(`Book not found with this id: ${id}`);
    }
    return book;
  }

  async update(id: string, updateBook: UpdateBookDto): Promise<Book> {
    const updatedBook = await this.bookModel.findOneAndUpdate(
      {
        _id: id,
      },
      updateBook,
      { new: true },
    );
    if (!updatedBook) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return updatedBook;
  }

  async remove(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findOneAndDelete({ _id: id });
    if (!deletedBook) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return deletedBook;
  }
}
