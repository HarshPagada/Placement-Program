let arr = [
    [1, 1, 2],
    [2, 2, 1]
]

let arr2 = [
    [2, 3, 4],
    [5, 4, 3]
]

const result = []

for (let i = 0; i < arr.length; i++) {
    let a = []
    for (let j = 0; j < arr[i].length; j++) {
        a.push(arr[i][j] + arr2[i][j])
    }
    result.push(a)
}
console.log(result)