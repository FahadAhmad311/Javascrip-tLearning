//Object Oriented Programming Example 1.
var purchase1 = {
    shoes: 100,
    statetax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.statetax;
        console.log('Total price:',calculation);
    }
}
purchase1.totalPrice()

var purchase2 = {
    shoes: 50,
    statetax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.statetax;
        console.log('Total price:',calculation);
    }
}
purchase2.totalPrice()