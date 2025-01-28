//Using spread operators it is easy to concatenate arrays..
const fruits = ['Apple','Plum','Apricot'];
const barries = ['bluebarrey','strawberrey'];

const fruitsandbarries = [...fruits,...barries];
console.log(fruitsandbarries)

//Using spread operators it is also easy to join objects..
const flying = {wings : 2}
const car = {wheels : 4}
const flyingcar = {...flying,...car}
console.log(flyingcar)

//By using this it's also easy to add new items without push methods..
let veggies = ['Onions','Tomattoes','Chiiles']
console.log(veggies)
veggies = [...veggies,'Herbs','Raddish','Green Leaves'];
console.log(veggies)

//Convert a string to an array using the spread operator
const greeting = "Hello! Fahad";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

//You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)