var purchase1 = {
    shoes: 100,
    statetax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.statetax;
        console.log('Total price:',calculation);
    }
}
purchase1.totalPrice()