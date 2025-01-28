//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

var test = typeof(17.32)
var test = typeof('Fahad')
console.log(test)
var result = "Hello".indexOf('l');
console.log(result)

var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";
console.log(dog)