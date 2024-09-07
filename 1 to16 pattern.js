
let num = 15;
let digit = ''

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        digit += num-- + ' '
    }
    digit += '\n'
}
console.log(digit); // Move to the next line


