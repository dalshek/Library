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
/*     this.info = function() {
        return title + " by " + author + ", " + pages + ", " + (read  ? "read" : "not read yet")
    } */
}

//---------------------FUNCTIONS-------------------------------
function addBookToLibrary(book) {
    myLibrary.push(book);
}
function bookLoop(){
    myLibrary.forEach(function(book){
        /* const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdAuthor = document.createElement('td');
        const tdRead = document.createElement('td');
        tdTitle.textContent = book.title;
        tr.appendChild(tdTitle);
        tdAuthor.textContent = book.author;
        tr.appendChild(tdAuthor);
        tdRead.textContent = book.read;
        tr.appendChild(tdRead);
        bookClass.appendChild(tr); */
        
        const tr = document.createElement('tr');

        for(let p in book){
            const td = document.createElement('td');
            td.textContent = book[p];
            tr.appendChild(td)
            bookClass.appendChild(tr);
        }

    })
}


//----------------------CALL---------------------
addBookToLibrary(theHobbit);
addBookToLibrary(HP);
addBookToLibrary(LOTR);
bookLoop();

