class Node {
    constructor(value) {
        this.value = value;  // holds node element
        this.next = null;   // pointer
    }
}

class LinkedList {
    constructor() {
        this.head = null;  // it refers to the first node in the list
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {  // If the list is empty
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {  // Traverse to the end of the list
            current = current.next;
        }
        current.next = newNode;  // Attach the new node
    }

    printList() {
        if (!this.head) {
            return console.log('list is empty')
        }

        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)

list.printList()