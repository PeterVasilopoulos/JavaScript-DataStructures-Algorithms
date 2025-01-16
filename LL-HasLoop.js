function hasLoop() {
    let slow = this.head;
    let fast = this.head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast === slow) {
            return true;
        }
    }
    
    return false;
}