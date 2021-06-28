const booktitles = document.querySelector(".booktitles");
const whereboxgoes = document.querySelector(".whereboxgoes");
const wherebookinfogoes = document.querySelector(".wherebookinfogoes");
const newSubmit = document.querySelector("#submit");
const btitle = document.querySelector("#title");
const bauthor = document.querySelector("#author");
const bpages = document.querySelector("#pages");
const displayError = document.querySelector(".error");
const deleteOption = document.querySelector(".deleteOption");
const delOrModify = document.querySelector(".delOrModify");
let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(myObj){
    myLibrary.push(myObj);
}


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
})

document.addEventListener("click", function(e){
    if(e.target.className === "box"){
        clickedon = e.target.innerText;
        for(let i=0;i<myLibrary.length;i++){
            if(myLibrary[i].title === clickedon){
                const userSelected = myLibrary[i]
                console.log(userSelected);
                wherebookinfogoes.textContent = `"${userSelected.title}" by ${userSelected.author} \n pages: ${userSelected.pages}`;
                const del = document.createElement("button");
                del.className = "deleteOption";
                del.textContent = "Delete this book"
                wherebookinfogoes.appendChild(del);
                del.addEventListener("click", function(e){
                    if(myLibrary.includes(userSelected)){
                        for(let i=0;i<myLibrary.length; i++){
                            const itemToDel = myLibrary.indexOf(userSelected);
                            return delete myLibrary[itemToDel];
                        }
                    }
                })
                return userSelected;
            }
        }
    }
})
