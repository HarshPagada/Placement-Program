let bin = [10, 3, 6, 5, 8, 9, 7, 5, 6]
let target = 9

let left = 0
let right = bin.length-1
let result = -1

bin.sort((a, b) => a - b);

while (left <= right) {
    let mid = Math.floor((left + right) / 2) //4

    if (bin[mid] === target) { //8
        result = mid 
        break
    } else if (bin[mid] < target) { // yes
        left = mid + 1  //  5
    }else{
        right = mid - 1
    }
}

if (result !== -1) {
    console.log(`Yes, ${target} is found in Array.`)
} else {
    console.log(`No, ${target} is not found in Array.`)
}
