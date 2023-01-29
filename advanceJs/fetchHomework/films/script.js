let btn = document.getElementById("btn");
let list = document.getElementById("list");

function fetchFilms(){
    fetch("https://swapi.dev/api/films")
    .then (response => response.json())
    .then (data => {
        createList(data)

})
}
    
    function createList(data){
        let ul = document.createElement("ul");
        let films = data.results;
        console.log(films);
        for( i = 0; i < films.length; i++){
            console.log(films.length);
        list.innerHTML +=`
        
            <li>${films[i].title}</li>
        
        `
        list.appendChild(ul);

    }
}

btn.addEventListener("click", function(){
        fetchFilms();
})



