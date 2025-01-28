const car = {
    engine : true,
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sports car object:",sportsCar);

for( prop in sportsCar){
    console.log(prop)
}

for (prop of Object.keys(sportsCar)){
    console.log(prop + ": "+sportsCar[prop]);
}
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 