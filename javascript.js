//-------------------INITIALIZING VARIABLES--------------------
let myLibrary = [];
const theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, false);
const HP = new Books("HP", "J.K. Rowling", 432, true)
const LOTR = new Books("LOTR", "J.R.R. Tolkien", 578, true)
const bookClass = document.querySelector('.book');
const addClass = document.querySelector('.add');
const formContainer = document.querySelector('.formContainer')

//--------------------CONSTRUCTOR---------------------------
function Books(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read ? "readed" : "not readed"
}

//---------------------FUNCTIONS-------------------------------
function addBookToLibrary(book) {
    myLibrary.push(book);
    bookClass.innerHTML="";
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
//---------------LISTENERS---------------

const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function(event){
    event.preventDefault();
    const titlef = document.querySelector('#titlef').value;
    const authorf = document.getElementById('authorf').value;
    const pagesf = parseInt(document.getElementById('pagesf').value);
    const readedf = document.getElementById('readedf').value;

    const book = new Books(titlef, authorf, pagesf, readedf);
    addBookToLibrary(book);
    bookLoop();
})


addClass.addEventListener('click', function(){
    if(formContainer.style.display === "none"){
        formContainer.style.display = "block";
    }else{
        formContainer.style.display = "none";
    }
});

//----------------------CALL---------------------
addBookToLibrary(theHobbit);
addBookToLibrary(HP);
addBookToLibrary(LOTR);
bookLoop();

