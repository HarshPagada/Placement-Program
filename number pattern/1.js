let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
        string += "  ";
    }
    for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
        string += k + ' ';
    }
    string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j < n - i; j++) {
        string += "  ";
    }
    for (let k = 1; k <= 2 * (i + 1) - 1; k++) {
        string += k + ' ';
    }
    string += "\n";
}
console.log(string);

