const title = document.getElementById("title");
const button = document.getElementById("button");
let newTitle = "";
let newAuthor = "";
let newPages = ""; 

let myLibrary = [
    {'title': 'Harry Potter', 'author': 'JK Rowling', 'pages': 500}
];
//const remove = document.getElementById('remove');

//buildTable(myLibrary)

/*function buildTable(data) {
    let table = document.getElementById('myTable')

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].pages}</td>
                   </tr>`
        table.innerHTML += row;
    }
}*/

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
    const book = new Book(newTitle, newAuthor, newPages);
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

form = document.getElementById('form');
let row = 2; 

form.addEventListener('submit', function(e) {
    e.preventDefault();
    newTitle = document.getElementById('title').value
    newAuthor = document.getElementById('author').value
    newPages = document.getElementById('pages').value 
    addToLibrary();
    let display = document.getElementById('table');
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2); 

    cell1.innerHTML = newTitle;
    cell2.innerHTML = newAuthor;
    cell3.innerHTML = newPages;

    row++;
})