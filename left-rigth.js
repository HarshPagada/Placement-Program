let arr = [0, 1, 0, 1, 0, 1,0]

let countZero = 0;
let countOne = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        countZero++;
    } else if (arr[i] === 1) {
        countOne++;
    }
}

for (let j = 0; j < arr.length; j++) {
    if (j < countZero) {
        arr[j] = 0;
    } else {
        arr[j] = 1;
    }
}
console.log(arr)