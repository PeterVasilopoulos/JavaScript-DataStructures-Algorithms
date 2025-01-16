function findMiddleNode() {
    if(this.head === this.tail) {
        return this.head;
    }
    
    let slow = this.head;
    let fast = this.head;
    
    while(fast && fast.next) {
        slow = slow.next;
        if(fast.next) {
            fast = fast.next.next;
        } else {
            fast = null;
        }
    }
    
    return slow;
}