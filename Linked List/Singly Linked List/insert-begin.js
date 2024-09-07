class Node {
    constructor(value) {
        this.value = value 
        this.next = null 
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        let newNode = new Node(value)  

        if (!this.head) {
            this.head = newNode
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    insertBegin(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    printList() {
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
     }
}

let list =  new LinkedList()
list.append(1)
list.append(2)
list.append(3)

list.insertBegin(10)

list.printList()
