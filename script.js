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

container = document.querySelector('container');

addBookButton = document.querySelector('.add-book');
addBookWindow = document.querySelector('.new-book-form');
submitBook = document.getElementById('submit-book');

addBookButton.addEventListener('click', () => {
  addBookWindow.style.display = 'block';
  document.addEventListener('click', (e) => {
    e.preventDefault;
    if (e.target.className === 'new-book-form') {
      addBookWindow.style.display = 'none';
    }
  })
});


addBookForm = document.getElementById('add-book');
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let bookTitle = document.getElementById('book-title').value;
  let bookAuthor = document.getElementById('book-author').value;
  let bookPages = document.getElementById('book-pages').value;
  let readYes = document.getElementById('book-read-yes').checked;
  if (readYes === true) {
    bookRead = 'Read';
  }
  else {
    bookRead = 'Not read';
  }
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
  addBookToLibrary(newBook);
  addBookForm.reset();
})


let itemList = document.querySelector('#book-grid');
itemList.addEventListener('click', removeItem);

function removeItem(e) {
  if (e.target.classList.contains('remove')) {
    let item = e.target.parentElement.parentElement;
    itemList.removeChild(item);
  }
}

function addBookToLibrary(newBook) {
  // do stuff here
  newItem = document.createElement('div');
  newItem.className = 'book';
  newItem.innerHTML = 
    `<div class="book-buttons">
    <img src="edit-svgrepo-com.svg" alt="Edit" class="edit">
    <img src="remove-svgrepo-com.svg" alt="Remove" class="remove">
    </div>
    <div class="title">${newBook.title}</div>
    <div class="author">${newBook.author}</div>
    <div class="pages">${newBook.pages}</div>
    <div class="read">${newBook.read}</div>`;
  container.appendChild(newItem);
  addBookWindow.style.display = 'none';
}