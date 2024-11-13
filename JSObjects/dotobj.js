console.log("Object Using Dot Notation")
const Student= {
    name:{first:"Fahad",last:"Ahmad"},
    age:21,
    address:"Kohat",
    bio:function(){
        console.log(` Myself ${this.name.first} ${this.name.last} from ${this.address}, and i am ${this.age} years old.`)
    }
}
Student.bio()
console.log(Student.name.first)
console.log(Student)