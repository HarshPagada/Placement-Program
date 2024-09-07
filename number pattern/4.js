let n, c, d = 0;
let b = 0;

n = parseInt(prompt("Enter Number: "));

let r = new Array(n).fill(0);
c = n;

while (n > 0) {
    d = d + n;
    r[b] = d;
    b++;
    n--;
}

n = c;
let e = d - n + 2;

for (let i = 0; i < c; i++) {
    if (c % 2 === 1) {
        if (i % 2 === 1 && i > 1) {
            e = e - (i + (i - 2));
        } else {
            e--;
        }
    } else {
        if (i % 2 === 0 && i > 1) {
            e = e - (i + (i - 2));
        } else {
            e--;
        }
    }

    for (let j = 0; j <= i; j++) {
        if (j > 0 && i % 2 === 0) {
            if (c % 2 === 1) {
                process.stdout.write(" " + (e - (j - 1)) + " ");
            } else {
                process.stdout.write(" " + (e + (j - 1)) + " ");
            }
        } else if (j > 0 && i % 2 === 1) {
            if (c % 2 === 1) {
                process.stdout.write(" " + (e + (j - 1)) + " ");
            } else {
                process.stdout.write(" " + (e - (j - 1)) + " ");
            }
        } else {
            process.stdout.write(" " + (d - i) + " ");
        }
    }
    console.log();
}
