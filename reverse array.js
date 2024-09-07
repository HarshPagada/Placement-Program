let arr = [19,22,3,28,26,17,18,4,28,0]
console.log('original array is: ',arr)

for(let i=0; i< Math.floor(arr.length/2); i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp
}
console.log('reverse array is: ',arr)