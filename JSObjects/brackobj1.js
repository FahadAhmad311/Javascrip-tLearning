const person={
    name:{
        first:"Fahad",
        last:"Ahmad"
    },
    age:21
}
console.log(person["name"])
console.log(person["age"])

function logProperty(propertyname){
    console.log(person[propertyname])
}
logProperty("name");
logProperty("age")