function enqueue(value) {
    while(!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
    }

    this.stack2.push(value);

    while(!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
    }
}