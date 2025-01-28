function listArrayItems(arritems){
    for (var i= 0; i < arritems.length; i++){
        console.log(i,arritems[i])//This will help to display each and only element from the array
    }
}
arritems=['Onions','Tomoatoes','Potatoes','Chillies']
//listArrayItems(arritems)
listArrayItems(arritems)

//Here's another function
function listArrayItems1(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems1(colors);