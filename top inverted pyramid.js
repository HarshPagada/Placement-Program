let s = '';
for (let b = 1; b < 6; b++) {
    for (let c = 6; c > b; c--) {
        s += ' ';
    }
    for (let a = 1; a <= b ; a++) {
        s += a + ' ';
    }
    s += '\n';
}
console.log(s);

