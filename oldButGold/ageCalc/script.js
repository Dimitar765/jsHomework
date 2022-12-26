let curentYear = new Date();
let year = curentYear.getFullYear();
// console.log(year);


let birthYear = parseInt(prompt("when were you born"));
console.log(typeof(birthYear));

function calculateAge(curentYear, birthYear){
    age = curentYear - birthYear;
    console.log(` you are ${age} years old`);
    
    return age;
}
calculateAge(year, birthYear);
