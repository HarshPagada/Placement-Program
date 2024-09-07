let arr = [
    [1, 1, 7, 2],
    [2, 2, 1, 8],
    [2, 6, 5, 8],
    [2, 6, 5, 8],
    [9, 6, 5, 8]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
        for (let k = 0; k < arr[i].length - j - 1; k++) {
            if (arr[i][k] > arr[i][k + 1]) {
                let flex = arr[i][k]
                arr[i][k] = arr[i][k + 1]
                arr[i][k + 1] = flex
            }
        }
    }
}
console.log(arr)