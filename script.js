//Class
class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  sayInfo() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}.`
  }
}


addBookButton = document.querySelector('.add-book');
addBookWindow = document.querySelector('.new-book-form');
submitBook = document.getElementById('submit-book');

//Prompts add book form & closes it when clicking outside the form
addBookButton.addEventListener('click', () => {
  addBookWindow.style.display = 'block';
  document.addEventListener('click', (e) => {
    if (e.target.className === 'new-book-form') {
      addBookWindow.style.display = 'none';
    }
  })
});

//Inserts form inputs into the newBook object
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
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  addBookToLibrary(newBook);
  addBookForm.reset();
})

let container = document.querySelector('container');

//Inserts the newBook object properties into the DOM
function addBookToLibrary(newBook) {
  newItem = document.createElement('div');
  newItem.className = 'book';
  newItem.innerHTML = 
    `<img src="remove-svgrepo-com.svg" alt="Remove" class="remove">
    <div class="title">${newBook.title}</div>
    <div class="author">${newBook.author}</div>
    <div class="pages">${newBook.pages}</div>
    <div class="read">${newBook.read}</div>`;
  container.appendChild(newItem);
  addBookWindow.style.display = 'none';
}

let itemList = document.querySelector('#book-grid');
itemList.addEventListener('click', removeItem);

//Removes books from the grid
function removeItem(e) {
  if (e.target.classList.contains('remove')) {
    let item = e.target.parentElement;
    itemList.removeChild(item);
  }
}