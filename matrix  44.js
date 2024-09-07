let matrix = 4 * 4;

for (let i = 4; i >= 1; i--) {
    num = new Array(4); 

    for (let j = 0; j < 4; j++) {
        num[j] = matrix--;
    }
    if (i === 4 || i === 2) { 
        num.reverse(); 
    }
    console.log(num.join(' ')); 
}

