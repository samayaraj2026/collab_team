//add array.js unique, max, min.


let arr = [10,20,309,67,45,434,677,89,10,20];

let minValue = Math.min(...arr);
let maxValue = Math.max(...arr);

let unique = new Set(arr)
let uniqueVal = [...unique]

console.log("Minimum Value: " + minValue);
console.log("Maximum Value: " + maxValue);
console.log("Unique Value: " + uniqueVal);

//output
//10
// 10
// Set(8) { 10, 20, 309, 67, 45, 434, 677, 89 }