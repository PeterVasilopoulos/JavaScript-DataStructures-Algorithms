function findKthFromEnd(k) {
    let pointer = this.head;
    let kth = this.head;
    let count = 0;
    
    while(pointer) {
        count++;
        pointer = pointer.next;
        
        if(count > k) {
            kth = kth.next;
        }
    }
    
    if(k > count) {
        return null;
    }
    return kth;
}