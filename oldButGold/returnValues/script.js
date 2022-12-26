function returnValue(x){
    let value = typeof(x);
    return value;
}

console.log(returnValue("tri"));
console.log(returnValue(23));
console.log(returnValue(true));
console.log(returnValue([]));
