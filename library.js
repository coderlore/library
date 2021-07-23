let myLibrary = [];
const remove = document.getElementById('remove');

function Book(author, title, pages, readOrNot) {
    this.autor = author;
    this.title = title;
    this.pages = pages;
    this.readOrNot = readOrNot;
    /*remove.addEventListner('click', () => {
        removeBook();
    })*/
}

function addToLibrary() {
    //use local storage
}

function populateStorage() {
    localStorage.setItem('book', 0);
}

const book = new Book('JK','Harry Potter','400','read');
console.log(book.title) 
