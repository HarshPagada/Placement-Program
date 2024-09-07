let flex = [1, 56, 5, 6, 66, 8, 89, 98]
let a = flex.length

for (let i = 0; i < a - 1; i++) {

    for (j = 0; j < a - i - 1; j++) {
        if (flex[j] > flex[j + 1]) {
            let temp = flex[j]
            flex[j] = flex[j + 1]
            flex[j + 1] = temp
        }
    }
}
console.log(flex)


