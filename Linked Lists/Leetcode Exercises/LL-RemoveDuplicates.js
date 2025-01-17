class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}

    removeDuplicates() {
        let values = new Set();
        let temp = this.head;
        let pre = null;

        while(temp) {
            if(values.has(temp.value)) {
                let remove = temp;
                temp = temp.next;
                remove.next = null;
                pre.next = temp;
                this.length--;
            } else {
                values.add(temp.value);
                pre = temp;
                temp = temp.next;
            }
        }
    }
}