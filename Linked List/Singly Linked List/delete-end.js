class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    inserted(value) {
        let newNode = new Node(value);
        if (this.head === null) {      // If the list is empty
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteEnd() {
        if (this.head === null) {       // if the list is empty
            return null;
        }

        if (this.head.next === null) {    // If there's only one node in the list
            this.head = null;             // Remove the only node
            return;
        }

        let current = this.head
        while (current.next.next) {
            current = current.next
        }
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
list.inserted(1)
list.inserted(2)
list.inserted(3)
list.inserted(4)

console.log("Before deletion:")
list.printList()

list.deleteEnd()

console.log("After deletion:");
list.printList();
