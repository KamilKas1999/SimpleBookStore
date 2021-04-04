import { Identifiers } from "@angular/compiler"
import { Book } from "./book.model";

export class Author{
    id: number;
    name: String;
    surname: String;
    books: Book[];
}