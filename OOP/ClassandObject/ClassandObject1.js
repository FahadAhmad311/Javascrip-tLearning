class Car{
        constructor(color, speed){
            this.color = color;
            this.speed = speed;
        }
        turboOn(){
            console.log("turbo is on!..")
        }
 }

const car1 = new Car('White','700cc')
console.log(car1)
car1.turboOn()