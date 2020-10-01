"use strict"
console.log("tmp")


var array = ["6", "4", "3", "0"]


console.log(parseInt(array));
for (const key in array) {
    console.log("key", key, "value ", array[key])

}









// create JSONOject from user Input
var userInputListJson = JSON.stringify(userInputList);

console.log("userinputjson: ", userInputListJson);

// solved Array from Bubblesort as JSON OBJECT
var sortedArrayJson = solveArraywithBubblesort(userInputListJson);
console.log("sortedArray", sortedArrayJson);


// convert to JSONObject
var sortedArray = JSON.parse(sortedArrayJson);
// console.log("backend-recive sortedArray.arrayJSON\t", sortedArray.arrayJSON);

// parse userInput to Integer
var userInputListInteger = [];
for (const key in userInputList) {
    // console.log("key", key, "value ", sortedArray.arrayJSON[key])
    userInputListInteger.push(parseInt(userInputList[key]))

}

sortedArray = sortedArray.arrayJSON;

console.log("USERINPUT\t", userInputListInteger);
console.log("backend-recive\t", sortedArray)