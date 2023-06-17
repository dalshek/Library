function Books(title, author, pages, read){
    title,
    author,
    pages,
    read
    this.info = function() {
        return title + " by " + author + ", " + pages + ", " + (read  ? "read" : "not read yet")
    }
}

let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, false);
const HP = new Books("HP", "J.K. Rowling", 432, true)
const LOTR = new Books("LOTR", "J.R.R. Tolkien", 578, true)

function bookLoop(){
    for(let book in myLibrary){
        console.log(book);
    }
}


addBookToLibrary(theHobbit);
addBookToLibrary(HP);
addBookToLibrary(LOTR);
bookLoop();