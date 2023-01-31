let picButtonPerson = document.getElementById("personsPic");
let table = document.getElementById("table");
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");
let picButtonShip = document.getElementById("starShipPic");
let tableForShips = document.getElementById("tableForShips");
let nextShipButton = document.getElementById("nextShipButton");
let previousShipButton = document.getElementById("previousShipButton");

function fetchSwapi() {
  fetch("https://swapi.dev/api/people/?page=1&page1=")
    .then((response) => response.json())
    .then((info) => {
      createTable(info);
      console.log(info);
    });
}
// fetchSwapi();

function createTable(info) {
  let tbody = document.createElement("tbody");
  let person = info.results;
  for (i = 0; i < person.length; i++) {
    table.innerHTML = "";
    tbody.innerHTML += `
            
            
            <tr>
            <th>Name</th>
            <td>${person[i].name}</td>
            <th>Height</th>
            <td>${person[i].height} cm</td>
            <th>Mass</th>
            <td>${person[i].mass} Kg</td>
            <th>Gender</th>
            <td>${person[i].gender}</td>
            <th>Born</th>
            <td>${person[i].birth_year}</td>
            <th>Appearances</th>
            <td>${person[i].films.length}</td>
            
            
            </tr>
            `;
    table.appendChild(tbody);

    nextLink = info.next;
    previousLink = info.previous;
  }
}

picButtonPerson.addEventListener("click", fetchSwapi);

function nextPage() {
  fetch(nextLink)
    .then((response) => response.json())
    .then((info) => {
      createTable(info);
    });
}

nextButton.addEventListener("click", nextPage);
function previousPage() {
  fetch(previousLink)
    .then((response) => response.json())
    .then((info) => {
      createTable(info);
    });
}

previousButton.addEventListener("click", previousPage);

function fetchSwapiShips() {
  fetch("https://swapi.dev/api/starships/?page=1")
    .then((response) => response.json())
    .then((infoShips) => {
      createTableForShips(infoShips);
      console.log(infoShips);
      nextLink = infoShips.next;
      previousLink = infoShips.previous;
    });
}
picButtonShip.addEventListener("click", fetchSwapiShips);

function createTableForShips(infoShips) {
  let tbody = document.createElement("tbody");
  let ships = infoShips.results;
  for (i = 0; i < ships.length; i++) {
    table.innerHTML = "";
    table.innerText = "";
    tbody.innerHTML += `
            
            <tr>
            <th>Name</th>
            <td>${ships[i].name}</td>
            <th>Model</th>
            <td>${ships[i].model}</td>
            <th>Manufacturer</th>
            <td>${ships[i].manufacturer}</td>
            <th>Cost</th>
            <td>${ships[i].cost_in_credits}</td>
            <th>Crew</th>
            <td>${ships[i].crew}</td>
            <th>Starship</th>
            <td>${ships[i].starship_class}</td>
            </tr>    
            `;
    table.appendChild(tbody);

    nextLinkShips = infoShips.next;
    previousLinkShips = infoShips.previous;
  }
}

function nextPageShips() {
  fetch(nextLinkShips)
    .then((response) => response.json())
    .then((infoShips) => {
      createTableForShips(infoShips);
    });
}

nextShipButton.addEventListener("click", nextPageShips);

function previousPageShips() {
  fetch(previousLinkShips)
    .then((response) => response.json())
    .then((infoShips) => {
      createTableForShips(infoShips);
    });
}

previousShipButton.addEventListener("click", previousPageShips);
