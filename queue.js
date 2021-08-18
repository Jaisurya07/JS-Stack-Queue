function Queue(maxCapacity) {
  this.maxCapacity = maxCapacity !== undefined ? maxCapacity : 1000;
  this.data = [];
  this.front = 0;
  this.size = 0;
  this.rear = this.maxCapacity - 1;

  this.isFull = function () {
    return this.size === this.maxCapacity;
  };
  this.isEmpty = function () {
    return this.size === 0;
  };

  this.enqueue = function (item) {
    if (this.isFull()) {
      console.log('Queue Overflows!');
      return false;
    }
    this.rear = (this.rear + 1) % this.maxCapacity;

    this.data[this.rear] = item;
    console.log(this.data);
    this.size += 1;

    return true;
  };

  this.dequeue = function () {
    if (this.isEmpty()) {
      console.log('Queue Underflows');
      return false;
    }
    var removedItem = this.data[this.front];
    console.log('Dequeued Item => ' + removedItem);
    this.data = unshift(this.data);
    console.log(this.data);
    this.rear = (this.data.length - 1) % this.maxCapacity;
    this.size -= 1;

    return true;
  };

  this.Front = function () {
    if (this.isEmpty()) {
      return this.data[this.front];
    }
    return this.data[this.front];
  };
  this.Rear = function () {
    if (this.isFull()) {
      return this.data[this.rear];
    }
    return this.data[this.rear];
  };
}

// Util function to do shifts after dequeue operations are performed..
function unshift(array) {
  for (var i = 0; i < array.length - 1; ++i) array[i] = array[i + 1];
  array.length -= 1;
  return array;
}

var queue = new Queue(6);

console.log('Is the Queue Empty ? => ' + queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

//  Attempt to add element beyond maximum Capacity...
queue.enqueue(6);

console.log('Front node is: ' + queue.Front());
console.log('Rear node is: ' + queue.Rear());

console.log('Is the Queue Full ? => ' + queue.isFull());

console.log('Size of Queue is ' + queue.size);

for (var i = 0; i < queue.maxCapacity; ++i) {
  console.log('Queue Front is ' + queue.Front());
  console.log('Queue Rear is ' + queue.Rear());
  queue.dequeue();
}

console.log(queue.isEmpty());
