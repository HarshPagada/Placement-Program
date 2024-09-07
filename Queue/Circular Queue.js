class cQueue {
    constructor(size) {
        this.size = size;
        this.item = new Array(size)
        this.front = -1
        this.rear = -1
        this.Length = 0
    }

    Enqueue(val) {
        if (this.isFull()) {
            console.log('Queue is Full')
            return
        }

        this.rear = (this.rear + 1) % this.size;
        this.item[this.rear] = val;
        this.Length += 1;
        if (this.front === -1) {
            this.front = this.rear;
        }
    }

    Dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is Empty')
            return null
        }

        const val = this.item[this.front];
        this.item[this.front] = null;
        this.front = (this.front + 1) % this.size;
        this.Length -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return val;
    }

    isFull() {
        return this.Length === this.size
    }

    isEmpty() {
        return this.Length === 0
    }

    Front() {
        return this.item[this.front]
    }

    Rear() {
        return this.item[this.item.length - 1]
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        } else {
            let i;
            let str = "";
            for (i = this.front; i !== this.rear; i = (i + 1) % this.size) {
                str += this.item[i] + " ";
            }
            str += this.item[i];
            return str
        }
    }
}

let person = new cQueue(5)
person.Enqueue(1)
person.Enqueue(2)
person.Enqueue(3)
person.Enqueue(4)
person.Enqueue(5)

console.log('dequeue is: ',person.Dequeue())

console.log('is Queue full? :', person.isFull())
console.log('first element of Queue is :', person.Front())
console.log('last element of Queue is :', person.Rear())

console.log('total number of element in Queue is: ', person.printQueue())


