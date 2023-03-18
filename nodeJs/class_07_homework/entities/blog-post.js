import { v4 as uuidv4 } from "uuid";

export class BlogPost {
  constructor(title, body, author, date, tags) {
    this.id = uuidv4();
    this.title = title;
    this.body = body;
    this.author = author;
    this.date = new Date();
    this.tags = tags;
  }
}
