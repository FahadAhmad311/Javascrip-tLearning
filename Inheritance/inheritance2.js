class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightStatus(){
        console.log('Lights on?',this.lightsOn)
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
}
var myFirstTrain = new Train('red',false);
console.log(myFirstTrain);
var mySecondTrain = new Train('blue',false);
var myThirdTrain = new Train('green',false);

var train4 = new Train('red', false);
train4.lightsOn();
train4.lightStatus();
train4.getSelf();
train4.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
console.log(train5)
console.log(highSpeed1)