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

container = document.querySelector('container');

addBookButton = document.querySelector('.add-book');

addBookButton.addEventListener('click', () => {
  book3 = document.createElement('div');
  book3.className = 'book';
  book3.innerHTML = 
    `<div class="book-buttons">
    <button class="edit-button"><img src="edit-svgrepo-com.svg" alt="Edit" class="edit"></button>
    <button class="remove-button"><img src="remove-svgrepo-com.svg" alt="Remove" class="remove"></button>
    </div>
    <div class="title">${book1.title}</div>
    <div class="author">${book1.author}</div>
    <div class="pages">${book1.pages}</div>
    <div class="read">${book1.read}</div>`;
  container.appendChild(book3);
});

removeBookButton = document.getElementsByClassName('remove-button');

removeBookButton.addEventListener('click', () => {
  console.log('Remove')
})

function addBookToLibrary() {
  // do stuff here
  book3 = document.createElement('div');
  book3.className = 'book';
  book3.textContent = book1.sayInfo();
  container.appendChild(book3);
}