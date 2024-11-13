console.log("Objects in Javascript");

const student={
    fullName:"Fahad Ahmad",
    regNo:"SE120212009",
    age: 21,
    address:"Kohat"
}
console.log(student);

const student2={
    fullName:"Ahmad Saeed ",
    regNo:"SE120212001",
    age:22,
    address:"Barh, Kohat",
    bio:function(){
        console.log(`Myself ${this.fullName} from ${this.address} having registeration number ${this.regNo}
             enrolled in KUST, Kohat`)
             
    }
    
}
student2.bio()