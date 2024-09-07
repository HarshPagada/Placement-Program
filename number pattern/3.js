let n = 5
let c
let d = 0;
let b = 0;
let r = [];

c = n;
while (n > 0) {
    d += n;
    r[b] = d;
    b++;
    n--;
}

n = c;
for (let i = 0; i < c; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        if (j > 0 && j % 2 === 0) {
            row += ` ${((d - r[j]) + (i - j))} `;
        } else if (j > 0 && j % 2 === 1) {
            row += ` ${((d - r[j]) + (c - i + 1))} `;
        } else {
            row += ` ${((d - r[j]) + i)} `;
        }
    }
    console.log(row);
}


