let arr = [19,22,3,28,26,17,18,4,28,0]
let temp = 0

for(let i=0; i< arr.length; i++){
    if(arr[i]%2 == 1){
        temp += arr[i]
    }
}
console.log('sum of odd number is :',temp)
