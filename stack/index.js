const Stack = require('./Stack')

const stack = new Stack()

console.log(stack.isEmpty())

stack
  .push(1)
  .push(2)
  .push(3)

console.log(stack.isEmpty())

console.log(stack.toString())

console.log(stack.peek())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.isEmpty())
