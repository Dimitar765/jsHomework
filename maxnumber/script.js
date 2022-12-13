var firstNumber = parseInt(prompt("vnesi go prviot broj "));
var secondNumber = parseInt(prompt("vnesi go vtoriot broj "));
var thirdNumber = parseInt(prompt("vnesi go tretiot broj "));
var fourthNumber = parseInt(prompt("vnesi go cetvrtiot broj "));
var fifthNumber = parseInt(prompt("vnesi go petiot broj "));
console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);

if (firstNumber > secondNumber && firstNumber > thirdNumber && firstNumber > fourthNumber && firstNumber > fifthNumber) {

    alert("max number is " + firstNumber);
}

else if (secondNumber > firstNumber && secondNumber > thirdNumber && secondNumber > fourthNumber && secondNumber > fifthNumber) {

    alert("max number is " + secondNumber);
}

else if (thirdNumber > firstNumber && thirdNumber > secondNumber && thirdNumber > fourthNumber && thirdNumber > fifthNumber) {

    alert("max number is " + thirdNumber);

}

else if (fourthNumber > firstNumber && fourthNumber > secondNumber && fourthNumber > thirdNumber && fourthNumber > fifthNumber) {

    alert("max number is " + fourthNumber);

}

else {
    
    alert("max number is " + fifthNumber);

}