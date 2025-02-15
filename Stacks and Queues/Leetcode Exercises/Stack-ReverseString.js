function reverseString(string) {
    let result = "";

    let stack = new Stack();

    for(let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    for(let i = 0; i < string.length; i++) {
        result += stack.pop();
    }

    return result;
}