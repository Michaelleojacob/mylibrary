const booktitles = document.querySelector(".booktitles");
const whereboxgoes = document.querySelector(".whereboxgoes");
let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(myObj){
    // console.log(myObj);
    myLibrary.push(myObj);

}

const wildthings = new Book("Where the wild things are", "Maurice Sendak", 40, "yes");
const abc = new Book("abc", "Murica", 26, "yes");
const troll = new Book ("xd", "kekw", 69, "nice");
// console.log(wildthings);

addBookToLibrary(wildthings)
addBookToLibrary(abc)
addBookToLibrary(troll)
// console.log(myLibrary);

function titlesToPage(){
    titlesOfBooks = [];
    myLibrary.map(function(x) {
        titlesOfBooks.push(x.title)
        return titlesOfBooks
    })
}
titlesToPage()
console.log(titlesOfBooks);

function makeboxes(string){
    const box = document.createElement("div");
    box.className = "box";
    const boxContent = document.createTextNode(string)
    box.appendChild(boxContent);
    whereboxgoes.appendChild(box);
}

for(i=0;i<titlesOfBooks.length; i++){
    makeboxes(titlesOfBooks[i])
}

const boxes = document.querySelectorAll(".box");

let boxArr = Array.from(boxes)
console.log(boxArr);

console.log(myLibrary);

boxArr.map(x => {
    x.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target.innerText);
        clickedon = e.target.innerText;
        myLibrary.forEach(element => {
            element.title.includes(clickedon) ? console.log("true") : console.log("false");
        })
    })
})

