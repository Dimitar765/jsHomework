let niza = [];
i = 101;
for (y = Math.pow(i, 2); i <=150; i++)
niza.push(y);

let sum = 0;
for ( let vrednost
     of niza){
    sum += vrednost;
}
console.log(sum);