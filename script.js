let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.info = function () {
        console.log("Name: " + name + " Author: " + author + " Pages " + pages + " Status " + read);
    }
}

function addBookToLibrary() {

}