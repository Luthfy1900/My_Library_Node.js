function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//adding things to the UI
class UI {
    static bookDisplay() {
        const theBooks = [{
            title: "Rich Dad",
            author: "Robert Kiyosaki",
            isbn: "9973"
        }];

        const books = theBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const theList = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="btn btn-danger btn-sm delete">erase</a></td>
        `;

        theList.appendChild(row);
    }


    static eraseBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        //Make alert disappear
        setTimeout(() => document.querySelector('.alert').remove(), 2000);

    }

    static reset() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }
}

//event to display the books
document.addEventListener('DOMContentLoaded', UI.bookDisplay);

//Adding a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    // To prevent actual submitting
    e.preventDefault();

    //getting the values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validation
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill all fields', 'danger');
    } else {

        //instantiate
        const book = new Book(title, author, isbn);

        //confirmation that book added
        UI.showAlert('Book has been added!', 'success');

        // lets add it to the UI now
        UI.addBookToList(book);

        //clearing the form
        UI.reset();
    }
});

//lets remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.eraseBook(e.target);

    //confirmation that book deleted
    UI.showAlert('Book has been deleted!', 'success');
});