function createPerson(name){
    const obj={};
    obj.name=name;
    obj.introduceSelf=function(){
        console.log(`Myself ${this.name}`);
    }
    return obj;
}
const person =createPerson("Fahad Ahmad");
person.introduceSelf();
const person1=createPerson("Ahmad Saeed");
person1.introduceSelf()