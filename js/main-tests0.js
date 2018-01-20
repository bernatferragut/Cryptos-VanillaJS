// JS 2
console.log("THIS IS A TEST!");

// selections
let myTitle = document.getElementById("mainTitle");
let myButton = document.getElementById("button");
let myList = document.getElementById("myList");
let myListItems = document.getElementById("myList").getElementsByTagName("li");
let newItemCounter = myListItems.length;

// Changing All Collection Items Texts
// for(let i=0; i<myListItems.length; i++){
//     myListItems[i].innerHTML = "CRYPTO " + (i+1);
//     myListItems[i].addEventListener('click', activateItem);
// }

myList.addEventListener("click", activateItem);

// Adding Items
myButton.addEventListener('click', addListItem);

// Functions
function activateItem(e) {
    if(e.target.nodeName == "LI") {
        myTitle.innerHTML = e.target.innerHTML;
        for(let i=0; i<e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("red");
        }
        e.target.classList.add("red");
    }
}

function addListItem() {
    newItemCounter ++;
    myList.innerHTML += "<li>Crypto " + newItemCounter + "</li>" 
}


