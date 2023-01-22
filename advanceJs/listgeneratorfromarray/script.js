
let names = ['pero', 'stefan', 'vera','svetlana','igor'];
let addItems = document.getElementById("btn");


function generateList(names){
    
    
    let list = document.getElementById("list");
    // list = list.innerText = "";
    names.forEach(element => {
        let li = document.createElement("li")
        li.innerText = element;
        list.appendChild(li);
        
    })};   
                
    
    addItems.addEventListener("click", function(){
        generateList(names);

    });
        




