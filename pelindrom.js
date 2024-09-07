let str = 'sos'
let peli = true

for(let i=0;i<str.length; i++){
    if(str[i] !== str[str.length-1-i]){
        peli= false
        break
    }
}
if(peli){
console.log("string is pelindrom");
}else{
  console.log("string is not pelindrom");  
}