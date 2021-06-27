const booktitles = document.querySelector(".booktitles");
const whereboxgoes = document.querySelector(".whereboxgoes");
const wherebookinfogoes = document.querySelector(".wherebookinfogoes");
const newSubmit = document.querySelector("#submit");
console.log(newSubmit);
let myLibrary = [];

newSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
})


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(myObj){
    myLibrary.push(myObj);
}

const wildthings = new Book("Where the wild things are", "Maurice Sendak", 40);
const abc = new Book("abc", "Murica", 26);
const troll = new Book ("xd", "kekw", 69);

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

boxes = document.querySelectorAll(".box");
let boxArr = Array.from(boxes);
boxArr.map(x => {
    x.addEventListener("click", (e) => {
        clickedon = e.target.innerText;
        for(i=0;i<myLibrary.length;i++){
            if (myLibrary[i].title === clickedon){
                const userSelected = myLibrary[i]
                console.log(userSelected);
                wherebookinfogoes.textContent = `"${userSelected.title}" by ${userSelected.author} \n pages: ${userSelected.pages}`;
                return userSelected;
            }
        }
    })
})



