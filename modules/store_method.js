export default class Store {
  getBooks = () => {
    let books;
    if (localStorage.getItem('booksLibrary') === null) {
      books = [];
    } else {
      books = JSON.parse(window.localStorage.getItem('booksLibrary'));
    }
    return books;
  }

  addBook = (book) => {
    const books = this.getBooks();

    books.push(book);
    window.localStorage.setItem('booksLibrary', JSON.stringify(books));
  }

  removeBook = (button) => {
    const books = this.getBooks();
    const parentDiv = button.parentNode;
    const myTitle = parentDiv.querySelector('.title').textContent;
    const myAuthor = parentDiv.querySelector('.author').textContent;
    const booksLeft = books.filter((book) => book.title !== myTitle && book.author !== myAuthor);

    window.localStorage.setItem('booksLibrary', JSON.stringify(booksLeft));
  }
}