let a = 7

for (let i = 1; i <= 7; i++) {
    let flag = ''
    for (let j = 1; j <= 7; j++) {
        if ((i === 1) && (j === 1 || j === 4 || j === 5 || j === 6 || j === 7)) {
            flag += '* '
        } else if ((i === 2 || i === 3) && (j === 1 || j === 4)) {
            flag += '* '
        } else if ((i === 4)) {
            flag += '* '
        }
        else if ((i === 5 || i === 6) && (j === 4 || j === 7)) {
            flag += '* '
        }
        else if ((i === 7) && (j === 1 || j === 2 || j === 3 || j === 4 || j === 7)) {
            flag += '* '
        }
        else {
            flag += '  '
        }
    }
    console.log(flag)
}

