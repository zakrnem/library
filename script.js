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

container = document.querySelector('container');

addBookButton = document.querySelector('.add-book');
addBookWindow = document.querySelector('.new-book-form');
submitBook = document.getElementById('submit-book')

addBookButton.addEventListener('click', () => {
  addBookWindow.style.display = 'block';
  document.addEventListener('click', (e) => {
    if (e.target.className === 'new-book-form') {
      addBookWindow.style.display = 'none';
    }
  })
});

submitBook.addEventListener('click', () => {
  newBookTitle = document.getElementById('book-title').value;
  newBookAuthor = document.getElementById('book-author').value;
  newBookPages = document.getElementById('book-pages').value;
  readYes = document.getElementById('book-read-yes').checked;
  if (readYes === true) {
    newBookRead = 'Read';
  }
  else {
    newBookRead = 'Not read';
  }
  const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
  alert(newBook.sayInfo());
})


let itemList = document.querySelector('#book-grid');
itemList.addEventListener('click', removeItem);

function removeItem(e) {
  if (e.target.classList.contains('remove')) {
    let item = e.target.parentElement.parentElement;
    itemList.removeChild(item);
  }
}

function addBookToLibrary() {
  // do stuff here
  book3 = document.createElement('div');
  book3.className = 'book';
  book3.innerHTML = 
    `<div class="book-buttons">
    <img src="edit-svgrepo-com.svg" alt="Edit" class="edit">
    <img src="remove-svgrepo-com.svg" alt="Remove" class="remove">
    </div>
    <div class="title">${book1.title}</div>
    <div class="author">${book1.author}</div>
    <div class="pages">${book1.pages}</div>
    <div class="read">${book1.read}</div>`;
  container.appendChild(book3);
}