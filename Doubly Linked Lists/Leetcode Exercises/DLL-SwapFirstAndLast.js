function swapFirstLast() {
    if(this.length === 0) {
        return undefined;
    }

    if(this.length === 1) {
        return this;
    }

    [this.head.value, this.tail.value] = [this.tail.value, this.head.value];

    return this;
}