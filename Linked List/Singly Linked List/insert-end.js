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

    insertEnd(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new LinkedList()
list.insertEnd(1)
list.insertEnd(2)
list.insertEnd(3)
list.insertEnd(6)

list.printList()

