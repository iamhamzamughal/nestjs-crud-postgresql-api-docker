
# NestJS Book Service with MongoDB (Mongoose)

A simple RESTful Book service built with NestJS and MongoDB using Mongoose.  
This project demonstrates basic CRUD operations for managing books with error handling using NestJS framework.

---

## Features

- Create a new book
- Retrieve all books
- Retrieve a book by MongoDB `_id`
- Update a book by `_id`
- Delete a book by `_id`
- Proper error handling with `NotFoundException`

---

## Technologies Used

- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- TypeScript
- Node.js

---

## Prerequisites

- Node.js (v16+ recommended)
- MongoDB instance (local or remote)
- npm or yarn package manager

---

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/nestjs-book-service.git
   cd nestjs-book-service
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure MongoDB connection:**

   Open `app.module.ts` (or wherever you configure Mongoose) and update the connection string:

   ```ts
   MongooseModule.forRoot('mongodb://localhost:27017/your-db-name'),
   ```

   Or use environment variables:

   ```
   MONGO_URI=mongodb://localhost:27017/your-db-name
   ```

4. **Run the application:**

   ```bash
   npm run start:dev
   ```

   Your app should now be running at `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint        | Description               |
| ------ | --------------- | -------------------------|
| POST   | `/books`        | Create a new book         |
| GET    | `/books`        | Get all books             |
| GET    | `/books/:id`    | Get a book by MongoDB `_id` |
| PATCH  | `/books/:id`    | Update a book by `_id`    |
| DELETE | `/books/:id`    | Delete a book by `_id`    |

---

## Example Book Document

```json
{
  "_id": "68275218ea02904174e6b8cf",
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publishedDate": "1937-09-21T00:00:00.000Z",
  "isAvailable": true
}
```

---

## Sample Service Method

```ts
async findOne(id: string): Promise<Book> {
  const book = await this.bookModel.findById(id).exec();

  if (!book) {
    throw new NotFoundException(`Book not found with this id: ${id}`);
  }

  return book;
}
```

---

## Running Tests

*If you add tests later, mention here how to run them.*

```bash
npm run test
```

---

## Contributing

Contributions are welcome! Feel free to:

- Open issues
- Submit pull requests
- Suggest improvements

Please follow the existing code style and write clear commit messages.

---

## License

This project is licensed under the MIT License.

---

## Contact

Created by **Your Name**  
Email: your.email@example.com  
GitHub: [yourusername](https://github.com/yourusername)

---

Thank you for checking out this project!  
Feel free to reach out if you have any questions or suggestions.
