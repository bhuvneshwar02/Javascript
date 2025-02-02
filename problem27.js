// You are developing a simple program to manage a library system. Your task is to create a Book class that represents a book in the library. Each book should have the following properties:

// title (string) - The title of the book.
// author (string) - The author of the book.
// year (number) - The year the book was published.
// The Book class should have the following methods:

// getSummary() - This method should return a string summarizing the book details in the format: "Title by Author, published in Year."
// Create the Book class and demonstrate how to create an instance of the Book class and call the getSummary() method.

class book {
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        return `${this.title} by ${this.author},published in ${this.year}.`;

    }
}
const myBook = new book('the jungle book','rudyard kipling', 1894);
console.log(myBook.getSummary());