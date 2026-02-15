let callStack = [];
callStack.push('login');
callStack.push('validate');
callStack.push('save');
let lastFunction = callStack.pop();
lastFunction = callStack.pop();

console.log(callStack + lastFunction)