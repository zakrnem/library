let myLibrary = [];

//constructor function Syntax
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.sayInfo = function() {
    console.log(`${title}, ${author}, ${pages}, ${read}.`)
   }
}

const book1 = new Book("48 Laws of Power", "Robert Greene", 452, "Not read");
const book2 = new Book("Man's Search for Meaning", "Viktor Frankl", 188, "Read");


// Object.create Syntax
/* const Book = {
  title: this.title,
  author: this.author,
  pages: this.pages,
  read: this.read,
  sayInfo: function() {
    console.log(`${this.title}, ${this.author}, ${this.pages}, ${this.read}.`);
  }
};

const book1 = Object.create(Book);
book1.title = '48 Laws of Power';
book1.author = 'Robert Greene';
book1.pages = 485;
book1.read = 'Not read';

const book2 = Object.create(Book);
book2.title = `Man's Search for Meaning`;
book2.author = 'Viktor Frankl';
book2.pages = 188;
book2.read = 'Read'; */

function addBookToLibrary() {
  // do stuff here
}