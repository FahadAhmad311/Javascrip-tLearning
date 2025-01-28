/*//Nested loops - one inside another
for (var firstnum = 0; firstnum < 2; firstnum ++){
    for (var secondnum = 0; secondnum < 10; secondnum ++){
        console.log(firstnum+ ',' +secondnum)
    }
}
*/
//Second example
/*for (i = 2; i < 4;i ++){
    for (j = 1; j < 11; j++){
        console.log(i +" times "+j+" equals "+i * j);
    }
}*/
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}