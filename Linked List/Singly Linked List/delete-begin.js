class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null  // it refers first node of linked list

    }
    appendNode(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            // console.log(current)
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    deleteBegin() {
        if (this.head === null) {       // if the list is empty
            return null;
        }

        if (this.head.next === null) {    // If there's only one node in the list
            this.head = null;             // Remove the only node
            return;
        }

        let current = this.head
        // console.log('current', current)
        this.head = current.next
        // console.log('head', this.head)
        current.next = null
    }

    printList() {
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}

let list = new LinkedList()
list.appendNode(1)
list.appendNode(2)
list.appendNode(3)
list.appendNode(4)
list.deleteBegin()
list.deleteBegin()

list.printList()
