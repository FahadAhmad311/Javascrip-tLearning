var shoes = 100;
var statetax = 1.2;

function totalPrice(shoes,tax){
    return shoes * tax;
}

var toPay = totalPrice(shoes, statetax)
console.log(toPay)