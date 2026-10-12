function standardArea(length=5,width=4){
    return length*width;
}

let Area1 = standardArea();
console.log("Standard Funtion Area (Default 5x4): ",Area1);

const arrowArea = (length=5,width=4) => {
    return length*width;
}
let Area2 = arrowArea(10,3);
console.log("Arrow Funtion Area (Custom 10x3): ",Area2);


function test() {
    let blockVar = "Hello";
    console.log(blockVar);
}

test();
try {
    console.log(blockVar);
}
catch (error) {
    console.log("Scope Test Error:", error.toString());
}



{
    let blockVar = "Hello";
    console.log(blockVar);
}
try {
    console.log(blockVar);
}
catch (error) {
    console.log("Scope Test Error: ", error.toString());
}



