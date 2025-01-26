// Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList Class
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Print List
    printList() {
        console.log('-----')
        let pointer = this.head;
        while(pointer) {
            console.log(pointer.value);
            pointer = pointer.next;
        }
        console.log("Length: " + this.length);
        console.log('-----')
    }

    // Push - add to end
    push(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // Pop - remove from end
    pop() {
        if(!this.head) {
            return;
        }
        if(this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        let prev = null;
        let pointer = this.head;
        while(pointer.next) {
            prev = pointer;
            pointer = pointer.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
    }

    // Unshift - add to beginning
    unshift(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    // Shift - remove from beginning
    shift() {
        if(!this.head) {
            return;
        }

        let remove = this.head;
        this.head = this.head.next;
        remove.next = null;
        this.length--;
    }

    // Insert
    insert(index, value) {
        if(index > this.length - 1) {
            return;
        }

        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        let prev = this.head;
        let pointer = this.head;

        for(let i = 0; i < index; i++) {
            prev = pointer;
            pointer = pointer.next;
        }

        prev.next = newNode;
        newNode.next = pointer;
        this.length++;
    }

    // Remove
    remove(index) {
        if(index > this.length - 1) {
            return;
        }

        let prev = this.head;
        let pointer = this.head;

        for(let i = 0; i < index; i++) {
            prev = pointer;
            pointer = pointer.next;
        }

        prev.next = pointer.next;
        pointer.next = null;
        this.length--;
    }

    // Reverse
    reverse() {
        if(this.length <= 1) {
            return;
        }

        let prev = null;
        let pointer = this.head;
        let next = null;

        while(pointer) {
            next = pointer.next;
            pointer.next = prev;
            prev = pointer;
            pointer = next;
        }

        this.head = prev;
    }
}

// Testing
let newList1 = new LinkedList(1);
newList1.push(7);
newList1.push(4);
newList1.push(2);
newList1.printList();
newList1.pop();
newList1.printList();
newList1.unshift(9);
newList1.printList();
newList1.shift();
newList1.printList();
newList1.insert(1, 0);
newList1.printList();
newList1.remove(2);
newList1.printList();
newList1.reverse();
newList1.printList();