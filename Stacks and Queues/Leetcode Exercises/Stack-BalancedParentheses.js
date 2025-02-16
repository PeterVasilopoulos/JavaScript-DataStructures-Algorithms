function isBalancedParentheses(parentheses) {
    if(parentheses.length % 2 !== 0) {
        return false;
    }

    const stack = new Stack();

    for(let i = 0; i < parentheses.length; i++) {
        if(parentheses[i] === '(') {
            stack.push(parentheses[i]);
        } else if(parentheses[i] === ')') {
            if(stack.isEmpty() || stack.pop() !== '(') {
                return false;
            }
        }
    }

    return stack.isEmpty();
}