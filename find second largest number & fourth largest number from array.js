let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = arr.length;
let temp;

for (let i = 0; i < total; i++) {
    for (let j = i + 1; j < total; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log('the second largest number is: ', arr[total - 2])  // i can change like total - 4