function partitionList(x) {
    if(this.length <= 1) {
        return
    }
    
    let front = new Node(0);
    let back = new Node(0);
    
    let frontPointer = front;
    let backPointer = back;
    
    let current = this.head;
    
    while(current) {
        if(current.value < x) {
            frontPointer.next = current;
            frontPointer = frontPointer.next;
        } else {
            backPointer.next = current;
            backPointer = backPointer.next;
        }
        
        current = current.next;
    }
    
    backPointer.next = null;
    frontPointer.next = back.next;
    this.head = front.next;
}