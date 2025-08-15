import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  @IsOptional()
  publishedDate?: string;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}

// {
//   "title":"Harry Pooter",
//   "author": "JK Rowling",
//   "publishedDate": "2024",
//   "isAvailable":true

// }
