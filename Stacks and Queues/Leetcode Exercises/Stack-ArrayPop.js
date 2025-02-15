function pop() {
    if(this.stackList.length === 0) {
        return null;
    }

    const temp = this.stackList[this.stackList.length - 1];
    this.stackList.pop();
    return temp;
}