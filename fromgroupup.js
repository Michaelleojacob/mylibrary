const booktitles = document.querySelector(".booktitles");
const whereboxgoes = document.querySelector(".whereboxgoes");
const wherebookinfogoes = document.querySelector(".wherebookinfogoes");
const newSubmit = document.querySelector("#submit");
const btitle = document.querySelector("#title");
const bauthor = document.querySelector("#author");
const bpages = document.querySelector("#pages");
const displayError = document.querySelector(".error");
let myLibrary = [];

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

newSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (btitle.value === ""){return displayError.textContent = "Book's title was empty"}
    else if (bauthor.value === ""){return displayError.textContent = "Book's author was empty"}
    else if (bpages.value === ""){return displayError.textContent = "Amount of pages was empty"}
    else{
        userTitle = btitle.value;
        userAuthor = bauthor.value;
        userPages = bpages.value;
    }
    btitle.value = "";
    bauthor.value = "";
    bpages.value = "";

    addBookToLibrary(new Book(userTitle, userAuthor, userPages));
    makeboxes(myLibrary[myLibrary.length - 1].title);
    boxArr.push(myLibrary[myLibrary.length - 1]);
    console.log(boxArr[boxArr.length - 1]);
})

document.addEventListener("click", function(e){
    if(e.target.className === "box"){
        clickedon = e.target.innerText;
        for(let i=0;i<myLibrary.length;i++){
            if(myLibrary[i].title === clickedon){
                const userSelected = myLibrary[i]
                console.log(userSelected);
                wherebookinfogoes.textContent = `"${userSelected.title}" by ${userSelected.author} \n pages: ${userSelected.pages}`;
                return userSelected;
            }
        }
    }
})
