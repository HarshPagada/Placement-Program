class queue {
    constructor(maxSize = Infinity) {
        this.element = []
        this.maxSize = maxSize; // Optional max size for the queue
    }

    insert(element) { // insert an element
        if (this.isFull()) {
            throw new Error('Queue is full')
        }
        this.element.push(element)
    }

    remove() {  // remove an element
        return this.element.shift()
    }

    front() {  // know last element of queue
        return this.element[0]
    }

    rear() {  // know first element of queue
        return this.element[this.element.length - 1]
    }

    isFull() {  // know queue is full or not
        return this.element.length >= this.maxSize
    }

    size() {  // get the size of queue
        return this.element.length
    }

    isEmpty() {
        return this.size() === 0
    }
}

let x = new queue()
x.insert(1)
x.insert(2)
x.insert(3)
x.insert(4)
x.insert(5)
console.log(x)

console.log('removed element is: ', x.remove())
console.log('front of queue is: ', x.front())
console.log('rear of queue is: ', x.rear())
console.log('Is the queue full? ', x.isFull());
console.log('Size of queue is: ', x.size());
console.log('Is the queue empty? ', x.isEmpty());


