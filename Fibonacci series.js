let user = 8;
let a = 0;
let b = 1;
let c;

console.log(a); 
console.log(b); 

for (let i = 2; i <= user; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(c);
}
