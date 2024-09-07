let numElements = parseInt(prompt('Enter the number of elements in the array:'));

let arr1 = [];

for (let i = 0; i < numElements; i++) {
    let element = parseFloat(prompt(`Enter element ${i + 1}:`));
    arr1.push(element);
}
console.log("Array entered by the user:", arr1);

if (arr1.length > 1) { 
    let temp = arr1[0];
    arr1[0] = arr1[arr1.length - 1];
    arr1[arr1.length - 1] = temp;
    console.log("Array after interchange:", arr1);
} else {
    console.log("Array is too small to interchange elements.");
}