//-------------------INITIALIZING VARIABLES--------------------
let myLibrary = [];
const theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, false);
const HP = new Books("HP", "J.K. Rowling", 432, true)
const LOTR = new Books("LOTR", "J.R.R. Tolkien", 578, true)
const bookClass = document.querySelector('.book');


//--------------------CONSTRUCTOR---------------------------
function Books(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = function() {
        return title + " by " + author + ", " + pages + ", " + (read  ? "read" : "not read yet")
    }
}

//---------------------FUNCTIONS-------------------------------
function addBookToLibrary(book) {
    myLibrary.push(book);
}
function bookLoop(){
    myLibrary.forEach(function(book){
        //console.log(book.title)
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.textContent = book.title;
        tr.appendChild(td1);
        td2.textContent = book.author;
        tr.appendChild(td2);
        td3.textContent = book.read;
        tr.appendChild(td3);
        bookClass.appendChild(tr);


    })
}


//----------------------CALL---------------------
addBookToLibrary(theHobbit);
addBookToLibrary(HP);
addBookToLibrary(LOTR);
bookLoop();

