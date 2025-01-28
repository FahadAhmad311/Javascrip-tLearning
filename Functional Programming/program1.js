//Functional Programming
var currencyOne = 2;
var currencyTwo = 0;
var exchangeCurrency = 278;

function converCurrency(amount, rate){
    return amount * rate;
}
currencyTwo = converCurrency(currencyOne,exchangeCurrency)
console.log(currencyTwo)