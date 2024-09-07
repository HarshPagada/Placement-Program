let pat = ''
for (let index = 5; index >= 1; index--) {
    for (let j = 5; j > index; j--) {
        pat += ' ';
    }
    for (let i = 1; i <= index; i++) {
        pat += i + ' '
    }
    pat += '\n';
}
console.log(pat)