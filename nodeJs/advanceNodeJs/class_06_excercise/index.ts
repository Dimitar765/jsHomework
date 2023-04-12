interface Author {
    firstName: string;
    lastName: string
}


interface Book extends Author {
    title: string;

}

interface ILibrary {
    addBook(book: Book): void ;
    removeBook(title:string): void;
    listBooks(): void
    }

class Library implements ILibrary {
    private _books: Book[] = [];

    addBook(book: Book): void {
        this._books.push(book)
    };
    removeBook(title: string): void {
        this._books = this._books.filter(book => book.title !== title)
    }
    listBooks(): void {
        this._books.forEach(book =>{
            console.log(book);
        })
    }
}

const newLibrary: Library = new Library();
const newBook: Book = {title: "abc", firstName:"pero", lastName:"kamikaza"}
const bookOne: Book = {title: "abre ubre", firstName: "ace", lastName: "gerasov"}
console.log(newBook);

newLibrary.addBook(newBook)
newLibrary.addBook(bookOne)
console.log(newLibrary);


newLibrary.removeBook("abc")
console.log(newLibrary);
// newLibrary.listBooks();



