const person1 = {
    name: {
        first: "Fahad",
        last: "Ahmad",
        introduceSelf() {
            console.log(`Myself ${this.first} ${this.last} from Kohat`);
        }
    },
    age: 21
};

const person2 = {
    name: "Ahmad Saeed",
    introduceSelf() {
        console.log(`Myself ${this.name} from Barh, Kohat`);
    }
};

// This should now work
person1.name.introduceSelf();
person2.introduceSelf();
