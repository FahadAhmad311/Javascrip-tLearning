var bird = {
    hasWings: true,
    canFly:true,
    hasFeathers:true
}

var eagle = Object.create(bird);
console.log('eagle: ',eagle);

console.log('eagle has wings:',eagle.hasWings);
console.log('eagle can fly:',eagle.canFly);
console.log('eagle has feathers:',eagle.hasFeathers);

var penguin = Object.create(bird);
console.log('penguin has feathers:',penguin.hasFeathers);
penguin.canFly = false;
console.log('penguin has feathers:',penguin.hasFeathers);
console.log('penguin has wings:',penguin.canFly)
console.log('penguin:',penguin)
