let decrement=(x)=>{
    if(x === 0) return ; 
    console.log(x);
    decrement(x - 1);
}

decrement(5)

// ex-2 

let fact=(y)=>{
 if(y === 1) return 1;
 return y * fact(y - 1);
}

console.log(fact(5)) 