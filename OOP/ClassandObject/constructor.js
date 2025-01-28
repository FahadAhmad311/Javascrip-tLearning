// function Icecream(flavor) {
//     this.flavor = flavor;
//     this.meltIt = function() {
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }
// let kiwiIcecream = new Icecream("Kiwi");
// let appleIcecream = new Icecream("apple");
// console.log(kiwiIcecream)
// // Call the meltIt method
// kiwiIcecream.meltIt(); // Output: The kiwi icecream has melted
// appleIcecream.meltIt(); // Output: The apple icecream has melted

//Example 2..
// function Icecream(flavor) {
//     this.flavor = flavor;
//     this.meltIt = function() {
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }

// let kiwiIcecream = new Icecream("kiwi");
// let appleIcecream = new Icecream("apple");
// kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
// appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
// console.log(kiwiIcecream)
// console.log(appleIcecream.meltIt())
//This is especially true for object constructors of primitive types, namely: String, Number, and Boolean.
//For example, using the built-in String constructor, I can build new strings
let apple = new String("Apple")
console.log(apple)
//The apple variable is an object of type String.
//Let's see how the apple object differs from the following pear variable:
let pear = "Pear"
console.log(pear)
