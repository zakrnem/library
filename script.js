let myLibrary = [];

//constructor function Syntax
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.sayInfo = function() {
    return `${title}, ${author}, ${pages}, ${read}.`;
   }
}

const book1 = new Book("48 Laws of Power", "Robert Greene", 452, "Not read");
const book2 = new Book("Man's Search for Meaning", "Viktor Frankl", 188, "Read");



addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {
  container = document.querySelector('container');
  book3 = document.createElement('div');
  book3.className = 'book';
  book3.textContent = book1.sayInfo();
  container.appendChild(book3);
})

function addBookToLibrary() {
  // do stuff here
}