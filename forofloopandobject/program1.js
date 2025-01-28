const car = {
    engine : true,
    steering : true,
    speed : 'slow'
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sports car object:",sportsCar);

console.log('----for-in is unreliable');
for( prop in sportsCar){
    console.log(prop)
}
console.log('Iterating over object and its prototype!');
console.log('For of is reliable');
for (prop of Object.keys(sportsCar)){
    console.log(prop + ": "+sportsCar[prop]);
}
console.log('Iterating over object own properties only');