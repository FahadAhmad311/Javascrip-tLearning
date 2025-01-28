try{
    //console.log(a + b)
    throw new ReferenceError();
} catch (err){
    console.log("Error")
}
console.log("Program is running")
