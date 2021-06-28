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