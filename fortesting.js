str = "hello / come / again"
console.log(str);
console.log(str.split("/"));
console.log(str.split("/"));
console.log(str.split("/"));
console.log(str.split("/").split("/"));

function makeboxes(){
    const box = document.createElement("div");
    box.className = "box";
    const boxContent = document.createTextNode("123")
    box.appendChild(boxContent);
    whereboxgoes.appendChild(box);
    returnboxContent.textContent
}

for(i=0;i<titlesOfBooks.length; i++){
    const box = document.createElement("div");
    box.className = "box";
    const boxContent = document.createTextNode("123")
    box.appendChild(boxContent);
    whereboxgoes.appendChild(box);
    boxContent.textContent = titlesOfBooks[i];
}



//?

boxes =document.querySelectorAll(".box");
let boxArr = Array.from(boxes);
boxArr.map(x => {
    x.addEventListener("click", (e) => {
        // console.log(e);
        clickedon = e.target.innerText;
        // console.log(clickedon);
        // myLibrary.title.includes(clickedon) ? console.log("true") : console.log("false");
        // myLibrary.map(x => {x.title.includes(clickedon) ? console.log("true") : console.log("false");})
        // if(myLibrary.map(x => x.title.includes(clickedon))){
        //     console.log(myLibrary.map(x => x[x.title.includes(clickedon)]));
        //     // console.log(myLibrary[myLibrary.map(x => x.title.includes(clickedon))]);

        //     // console.log(myLibrary[myLibrary.map(x=>x.title)] === clickedon)
        //     // return myLibrary[myLibrary.map(x => x.title) === clickedon];
        // }
        for(i=0;i<myLibrary.length;i++){
            if (myLibrary[i].title === clickedon){
                console.log(myLibrary[i]);
                return myLibrary[i];
            }
        }
    })
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
                delOrModify.append(del);
                del.textContent = "would you like to delete this book?"
                del.addEventListener("click", function(e){
                    console.log(e);
                })
                return userSelected;
            }
        }
    }
})


//! local storage testing 

//? for testing
// function storageAvailable(type) {
//     var storage;
//     try {
//         storage = window[type];
//         var x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch(e) {
//         return e instanceof DOMException && (
//             e.code === 22 ||
//             e.code === 1014 ||
//             e.name === 'QuotaExceededError' ||
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             (storage && storage.length !== 0);
//     }
// }
//? for testing
// if (storageAvailable('localStorage')) {
//     console.log("we can use localstorage");
// }
// else {
//     console.log("localstorage is not available");
// }

//? for local storage
var a = [];
a.push(JSON.parse(localStorage.getItem(myLibrary)));
localStorage.setItem(myLibrary, JSON.stringify(a));

function SaveDataToLocalStorage(data){
    var a = [];
    i=0;
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem(myLibrary)) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem(myLibrary, JSON.stringify(a));
}

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



function reanmeLater(){
    for(let i=0;i<myLibrary.length;i++){
        extractValues = Object.values(myLibrary[i]);
        console.log(clickedon);
        console.log(myLibrary[i]);
        console.log(clickedon);
        console.log(extractValues);
        console.log(extractValues[i][0]);
        if(extractValues[i][0] === clickedon){
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
    }
}

document.addEventListener("click", function(e){
    if(e.target.className === "box"){
        clickedon = e.target.innerText;
        reanmeLater()
    }
})
