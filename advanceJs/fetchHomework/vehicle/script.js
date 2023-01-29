let vehicle = document.getElementById("name");
let table = document.getElementById("table");
let btn = document.getElementById("btn");

function fetchVehicle(){
    fetch("https://swapi.dev/api/vehicles/20")
        .then(response => response.json()
        .then(data => {
            console.log(data);
            printNameAndStats(data);
        })
        
        )
        
    }

function printNameAndStats(data){
    console.log(data.name);
    vehicle.innerHTML += `
    ${data.name}
    
    `
    table.innerHTML += `
        <tr>
        <th>Model:</th>
        <td>${data.model}</td>
        <th>Manufacturer:</th>
        <td>${data.manufacturer}</td>
        <th>Crew:</th>
        <td>${data.crew}</td>
        <th>Passengers:</th>
        <td>${data.passengers}</td>
        <th>Class:</th>
        <td>${data.vehicle_class}</td>
        </tr>
    
    `
}

btn.addEventListener("click", function(){

    fetchVehicle();
})

