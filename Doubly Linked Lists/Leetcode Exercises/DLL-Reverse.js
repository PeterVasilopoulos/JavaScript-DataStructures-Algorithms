function reverse() {
    if(this.length < 2) {
        return;
    }

    let current = this.head;
    let before = current.prev;
    let after = current.next;

    this.head = this.tail;
    this.tail = current;

    for(let i = 0; i < this.length; i++) {
        after = current.next;
        current.prev = after;
        current.next = before;
        before = current;
        current = after;
    }

    return this;
}