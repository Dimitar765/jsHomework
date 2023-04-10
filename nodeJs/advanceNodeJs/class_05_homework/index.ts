

interface Person {
    name: string;
    age: number;
    gender: 'female' | 'male'}
    
const people: Person[] = [
      { name: 'ana', age: 30, gender: 'female' },
      { name: 'pero', age: 25, gender: 'male' },
      { name: 'jovan', age: 35, gender: 'male' },
      { name: 'ilina', age: 28, gender: 'female' },
      { name: 'vera', age: 23, gender: 'female'}
    ];
    
    
function filterByProperty(people: Person[], property: keyof Person, value: string | number): Person[]{
    return people.filter(person => person[property] === value)
    }


const females = filterByProperty(people, 'age', 25)
const males = filterByProperty(people, 'gender', 'male')
console.log(females);
console.log(males);


