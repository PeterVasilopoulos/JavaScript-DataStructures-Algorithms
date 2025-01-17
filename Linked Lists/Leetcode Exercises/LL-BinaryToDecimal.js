function binaryToDecimal() {
    let num = 0;
    let temp = this.head;

    while(temp) {
        num = num * 2 + temp.value;
        temp = temp.next;
    }

    return num;
}