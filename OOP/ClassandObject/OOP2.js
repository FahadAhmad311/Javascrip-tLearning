//Object Oriented Programming Example 2.
var purchase2 = {
    shoes: 50,
    statetax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.statetax;
        console.log('Total price:',calculation);
    }
}
purchase2.totalPrice()