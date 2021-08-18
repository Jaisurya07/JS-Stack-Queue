function Stack(maxSize){
  this.head = -1;
  this.MAX = (maxSize !== undefined)?maxSize:1000;
  this.data = [];
  this.data.length =  this.head+1;
  this.IsEmpty = function() {return this.head<0;};
  
  this.IsFull = function() {return this.head >= this.MAX-1;};  
  this.Push = function(item) {
    if(this.IsFull()) {console.log("Stack Overflows");return false;};
  
      this.data[++this.head] = item;
      console.log(this.data);
      return true;
};
  this.Pop = function() {
    if(this.IsEmpty()) {console.log("Stack is Empty!");return false;};
  
      var poppedItem = this.data[this.head--];

      this.data.length = this.head+1;
      console.log("The popped Item is "+poppedItem);
    console.log(this.data)
      return true;
};
  this.Peek = function() {
  if(this.IsEmpty()) {console.log("Nothing to Peek! Stack is Empty!");return false;};
  
      var peekedItem = this.data[this.head];
      console.log("The peeked Item is "+peekedItem);
      console.log(this.data)
      
  return peekedItem;
  
}
        
};


var stack = new Stack();

console.log(stack);

// console.log(stack.IsFull());

// stack.Push(5);
// stack.Push(6);
// stack.Push(7);
// stack.Push(8);
// stack.Push(9);
// stack.Push(10);
// stack.Peek();
// console.log(stack.IsFull());
// for(var i=0;i<6;++i) stack.Pop();
// console.log(stack.IsEmpty());
// stack.Peek();


module.exports = Stack;