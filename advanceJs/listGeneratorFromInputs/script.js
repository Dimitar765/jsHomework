let btn = document.getElementById("btn");
let color = document.getElementById("color");
let fontSize = document.getElementById("fontSize");
let items = document.getElementById("items");
console.log(color.value);
console.log(fontSize.value);
console.log(items.value);

function createList(){
    let list = document.createElement("ul");
    document.body.appendChild(list)
    console.log(list);
    let listItems = document.createElement("li");
    list.appendChild(listItems);
    // list.innerHTML = ""
    console.log(listItems);    
    listItems.innerText = `${color.value}, ${fontSize.value}, ${items.value}`;
    

}



btn.addEventListener("click", function(){
    createList();

})