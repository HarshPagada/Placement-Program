for(let p=1; p<=5;p++){
    let row = ''
    for(let q=1; q<=5; q++){
        if((p===1 || p===3 || p===5) ){
            row += '* '
        }else if(q===5){
            row += '*'
        }
        else{
            row += '  '
        }
    }
    console.log(row)
}


