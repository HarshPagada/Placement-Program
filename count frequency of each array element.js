let str = [-1,1,2,5,8,7,4,1,-2,-9];
let result = {};
for (let p = 0; p < str.length; p++) {
   if(result[str[p]]==undefined)
  {
    result[str[p]]=1;
  }
  else
  {
    result[str[p]]+=1;
  }
}
console.log(result);