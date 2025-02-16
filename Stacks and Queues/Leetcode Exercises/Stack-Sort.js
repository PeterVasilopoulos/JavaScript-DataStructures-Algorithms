function sortStack(stack) {
    const additionalStack = new Stack();

    while(!stack.isEmpty()) {
        let temp = stack.pop();

        while(!additionalStack.isEmpty() && additionalStack.peek() > temp) {
            stack.push(additionalStack.pop());
        }

        additionalStack.push(temp);
    }

    while(!additionalStack.isEmpty()) {
        stack.push(additionalStack.pop());
    }
}