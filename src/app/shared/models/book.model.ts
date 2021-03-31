export class Book {
  id : number;
  name: string;
  coverLink: string;
  published: string;
  price: number;
  author: {
    name: string;
    surname: string;
  };
  genre:{
      name: string;
  }
}
