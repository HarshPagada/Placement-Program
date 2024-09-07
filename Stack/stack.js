class stack{
    constructor(){
        this.item = []
    }

    push(item){      // push element
       this.item.push(item)
    }

    pop(){          // remove element from last
        return this.item.pop()
    }

    peek(){    // get the last element
        return this.item[this.item.length-1]
    }

    getSize(){   // get the size of stack
        return this.item.length
    }
 
    isEmpty(){     // know stack is empty or not
        return this.getSize() === 0
    }
}

let obj = new stack()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
console.log(obj)

obj.pop()
console.log(obj)

console.log('last element is:', obj.peek())
console.log(obj.getSize())
console.log(obj.isEmpty())
