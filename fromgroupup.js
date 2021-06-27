const booktitles = document.querySelector(".booktitles");
const whereboxgoes = document.querySelector(".whereboxgoes");
let myLibrary = [];
userSelected = "";

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(myObj){
    myLibrary.push(myObj);
}

const wildthings = new Book("Where the wild things are", "Maurice Sendak", 40, "yes");
const abc = new Book("abc", "Murica", 26, "yes");
const troll = new Book ("xd", "kekw", 69, "nice");

addBookToLibrary(wildthings);
addBookToLibrary(abc);
addBookToLibrary(troll);

function makeboxes(string){
    const box = document.createElement("div");
    box.className = "box";
    const boxContent = document.createTextNode(string)
    box.appendChild(boxContent);
    whereboxgoes.appendChild(box);
}

for(i=0;i<myLibrary.length;i++){
    makeboxes(myLibrary[i].title);
}

boxes =document.querySelectorAll(".box");
let boxArr = Array.from(boxes);
boxArr.map(x => {
    x.addEventListener("click", (e) => {
        clickedon = e.target.innerText;
        for(i=0;i<myLibrary.length;i++){
            if (myLibrary[i].title === clickedon){
                const userSelected = myLibrary[i]
                console.log(userSelected);
                return userSelected;
            }
        }
        return userSelected
    })
})

