function isPalindrome() {
    if(this.length < 2) {
        return true;
    }

    let front = this.head;
    let back = this.tail;
    let count = 0;

    while(count < this.length / 2) {
        if(front.value !== back.value) {
            return false;
        }

        front = front.next;
        back = back.prev;
        count++;
    }

    return true;
}