class Stack {
  constructor () {
    // pointer point at the top of the stack
    this.top = 0
    // init stack
    this.stack = []
  }

  // Adds a value onto the end of the stack
    push(value) {
        this.stack[this.top] = value
        this.top ++
    }

    // Removes and returns the value at the end of the stack
    pop() {
        // check if the stack is empty
        if(isEmpty()){
          return "Stack is Empty"
        }

      this.top --
      const result = this.stack[this.top]
      // Update stack
      this.stack = this.stack.splice(0, this.top)
      return result
       
    }

    // Returns the size of the stack
    size() {
     return this.top
    }

    // Returns the value at the end of the stack
    peek() {
       return this.stack[this.top - 1] || null
    }

    // To see all the elements in the stack
    print(output = (value) => console.log(value)) {
        for (let i = 0; i < this.top; i++) {
            output(this.stack[i])
        }
    }
}
