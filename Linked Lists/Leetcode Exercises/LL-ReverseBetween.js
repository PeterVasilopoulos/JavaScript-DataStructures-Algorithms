// This was my solution that doesn't work
function reverseBetween(m, n) {
    let before = null;
    let current = this.head;
    let after = null;

    let beforeReverse = null;
    let beginning = null;
    let end = null;

    let count = 0;

    while(current <= n) {
        if(count === m - 1) {
            beforeReverse = current;
        }

        if(count === n) {
            beginning = current;
        }

        if(count === m) {
            end = current;

            before = current;
            current = current.next;
            after = current.next;
        }

        if(count >= m) {
            current.next = before;
            before = current;
            current = after;
        } else {
            current = current.next;
        }

        count++;
    }

    beforeReverse.next = beginning;
    end.next = current;
}


// This is the solution from the teacher that does work
function reverseBetween2(m, n) {
    if(!this.head) {
        return;
    }

    const dummy = new Node(0);
    dummy.next = this.head;

    let prev = dummy;

    for(let i = 0; i < m; i++) {
        prev = prev.next;
    }

    let current = prev.next;

    for(let i = 0; i < n - m; i++) {
        const temp = current.next;

        current.next = temp.next;

        temp.next = prev.next;
        prev.next = temp;
    }

    this.head = dummy.next;
}