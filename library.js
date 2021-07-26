const title = document.getElementById("title");
const button = document.getElementById("button");

let myLibrary = [];
//const remove = document.getElementById('remove');

class Book {
    constructor(author, title, pages, readOrNot) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.readOrNot = readOrNot;
    }
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

//const book = new Book('JK','Harry Potter','400','read');
//console.log(book.title)
//console.log(book.author) 
//console.log(book.pages) 
//console.log(book.readOrNot) 

form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value 
    console.log(title);
    console.log(author);
    console.log(pages);
})