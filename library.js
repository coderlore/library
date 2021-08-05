const title = document.getElementById("title");
const display = document.getElementById('table');
const readBtn = document.getElementsByClassName('readBtn');
let newTitle = "";
let newAuthor = "";
let newPages = ""; 
let cell4 = "";

let myLibrary = [
    {'title': 'Harry Potter', 'author': 'JK Rowling', 'pages': 500}
];

class Book {
    constructor(title, author, pages, readOrNot) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readOrNot = readOrNot;
    }
}

function addToLibrary() {
    //use local storage
    const book = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(book);
    //buildTable(myLibrary)
}

function populateStorage() {
    localStorage.setItem('book', 0);
}

//const book = new Book('JK','Harry Potter','400','read');
//console.log(book.title)
//console.log(book.author) 
//console.log(book.pages) 
//console.log(book.readOrNot) 

let newRead = "Read";
form = document.getElementById('form');
let row = 2; 

form.addEventListener('submit', function(e) {
    e.preventDefault();
    newTitle = document.getElementById('title').value
    newAuthor = document.getElementById('author').value
    newPages = document.getElementById('pages').value 
    newRead = document.getElementById('readOrNot').value
    addToLibrary();

    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2); 
    cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = newTitle;
    cell2.innerHTML = newAuthor;
    cell3.innerHTML = newPages;
    cell4.innerHTML = `<button onclick="readOrTBR(this)" class="readBtn" value=${newRead}>${newRead}</button>`
    cell5.innerHTML = `<button onclick="deleteRow(this)">Delete</button>`
    row++;
})

function deleteRow(x) {
    display.deleteRow(x.parentElement.parentElement.rowIndex)
    //remove object from myLibrary
    myLibrary.splice(0,1);
    row--;
}

function readOrTBR() {
    if (newRead == 'Read') {
        newRead = 'Not Read';
        //document.getElementById('bookRead').innerHTML = 'Not Read';
        cell4.innerHTML = `<button onclick="readOrTBR(this)" class="readBtn" value=${newRead}>${newRead}</button>`;
    } else if (newRead == 'Not Read') {
        newRead = 'Read';
        //document.getElementById('bookRead').innerHTML = 'Read';
        cell4.innerHTML = `<button onclick="readOrTBR(this)" class="readBtn" value=${newRead}>${newRead}</button>`;
    }
}

// Example of object and constructors
/*function findBook (myLibrary, title){
    for (Book of myLibrary)
        if (Book.name == title) {
            return myLibrary.indexOf(Book);
        }
}

function changeStatus(Book) {
    if (myLibrary[Book].readOrNot === 'Read') {
        myLibrary[Book].readOrNot = 'Not Read';
    } else {
        myLibrary[Book].readOrNot = "Read"
    }
}*/

