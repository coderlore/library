const title = document.getElementById("title");
const button = document.getElementById("button");
let currentTitle = "";
let currentAuthor = "";
let currentPages = ""; 

let myLibrary = [
    {'title': 'Harry Potter', 'author': 'JK Rowling', 'pages': 500}
];
//const remove = document.getElementById('remove');

//buildTable(myLibrary)

function buildTable(data) {
    let table = document.getElementById('myTable')

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].pages}</td>
                   </tr>`
        table.innerHTML += row;
    }
}

class Book {
    constructor(title, author, pages, readOrNot) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readOrNot = readOrNot;
    }
    /*remove.addEventListner('click', () => {
        removeBook();
    })*/
}

function addToLibrary() {
    //use local storage
    const book = new Book(currentTitle, currentAuthor, currentPages);
    myLibrary.push(book);
    buildTable(myLibrary)
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
    let newTitle = document.getElementById('title').value
    let newAuthor = document.getElementById('author').value
    let newPages = document.getElementById('pages').value 
    currentTitle = newTitle;
    currentAuthor = newAuthor;
    currentPages = newPages;
    addToLibrary();
})