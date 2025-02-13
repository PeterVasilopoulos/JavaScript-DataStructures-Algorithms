function swapPairs2() {
    if(this.length < 2) {
        return;
    }

    let first = this.head;
    let second = first.next;
    let count = 0;

    while(count < this.length / 2) {
        if(first.prev) {
            first.prev.next = second;
        }

        if(second.next) {
            second.next.prev = first;
        }

        first.next = second.next;
        second.prev = first.prev;

        first.prev = second;
        second.next = first;

        if(first.next) {
            first = first.next;
            second = first.next;
        }

        count++;
    }
}


function swapPairs() {
    if(this.length < 2) {
        return;
    }

    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    while(this.head && this.head.next) {
        let firstNode = this.head;
        let secondNode = this.head.next;

        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        secondNode.prev = prev;
        firstNode.prev = secondNode;

        if(firstNode.next) {
            firstNode.next.prev = firstNode;
        }

        this.head = firstNode.next;
        prev = firstNode;
    }

    this.head = dummy.next;
    if(this.head) {
        this.head.prev = null;
    }
}