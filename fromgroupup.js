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
let localStorageIndexCount = localStorage.length;

function doesLocalStorageHaveItems(){
    if(localStorage.length !== 0){
        for(let i=0; i<localStorage.length; i++){
            myLibrary.push(localStorage[i]);
        }
    }
}
doesLocalStorageHaveItems()

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function makeCardforBook(string){
    const box = document.createElement("div");
    box.className = "box";
    box.setAttribute("id", string);
    const boxContent = document.createTextNode(string);
    box.appendChild(boxContent);
    whereboxgoes.appendChild(box);
}

newSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if((btitle.value.includes("/")) || (bauthor.value.includes("/")) || (bpages.value.includes("/"))){
        return displayError.textContent = `the character "/" is not allowed to be used`;
    }
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

    myLibrary.push(new Book(userTitle, userAuthor, userPages));
    localStorage.setItem(localStorageIndexCount++, `${userTitle}/${userAuthor}/${userPages}`);
    makeCardforBook(myLibrary[myLibrary.length - 1].title);
})

function localToCardPlusSplitEachElement(){
    for(let i=0; i<myLibrary.length; i++){
        if (!myLibrary[i].includes("/")){
            return
        }
        else{
            myLibrary[i] = myLibrary[i].split("/");
            makeCardforBook(myLibrary[i][0])
        }
    }
}
localToCardPlusSplitEachElement()

document.addEventListener("click", function(e){
    if(e.target.className === "box"){
        clickedon = e.target.innerText;
        for(let i=0;i<myLibrary.length;i++){
            //logic for items that the user dynamically creates.
            if((myLibrary[i].title === clickedon) && (undefined !== myLibrary[i].title)){
                const userSelected = myLibrary[i]
                wherebookinfogoes.textContent = `"${userSelected.title}" by ${userSelected.author} \n pages: ${userSelected.pages}`;
                const del = document.createElement("button");
                del.className = "deleteOption";
                del.textContent = "Delete this book";
                wherebookinfogoes.appendChild(del);
                del.addEventListener("click", function(e){
                    if(myLibrary.includes(userSelected)){
                        for(let i=0;i<myLibrary.length; i++){
                            const itemToDel = myLibrary.indexOf(userSelected);
                            bookcard = document.getElementById(userSelected.title);
                            bookcard.remove();
                            del.remove();
                            wherebookinfogoes.textContent = "";
                            delete myLibrary[itemToDel];
                            delete localStorage[itemToDel]
                            myLibrary = myLibrary.filter(item => item);
                            return;
                        }
                    }
                })
            }
            //logic for items that were created by localstorage
            if(myLibrary[i][0] === clickedon){
                let userSelected = myLibrary[i];
                wherebookinfogoes.textContent = `"${userSelected[0]}" by ${userSelected[1]} \n pages: ${userSelected[2]}`;const del = document.createElement("button");
                del.className = "deleteOption";
                del.textContent = "Delete this book";
                wherebookinfogoes.appendChild(del);
                del.addEventListener("click", function(e){
                    if(myLibrary.includes(userSelected)){
                        for(let i=0;i<myLibrary.length; i++){
                            console.log(userSelected);
                            const itemToDel = myLibrary.indexOf(userSelected);
                            console.log(itemToDel);
                            bookcard = document.getElementById(userSelected[0]);
                            bookcard.remove();
                            del.remove();
                            wherebookinfogoes.textContent = "";
                            delete myLibrary[itemToDel];
                            delete localStorage[itemToDel]
                            myLibrary = myLibrary.filter(item => item);
                            return;
                        }
                    }
                })
            }
        }
    }
})
