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
//logProperty("name");
//logProperty("age")
person.age=22
person['name']['last']='Khattak';
person.age;
person['name']['last'];
console.log(person.age)
console.log(person["name"]['last'])
person["Eyes"]="Black";
person.farewell=function(){
    console.log("Take Care!.")
}
person["Eyes"];
person.farewell();

const myDataName="height";
const myDataValue="173.03m";
person[myDataName]=myDataValue;
console.log(person.height);