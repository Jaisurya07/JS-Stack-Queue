const { test } = require('@jest/globals')
const Queue = require('../queue')


test('creating a Queue object',()=>{
    const reciever = new Queue(5);
    const tester = new Queue(5);
    expect(
        JSON.stringify(reciever)).
        toBe(JSON.stringify(tester))
});

test("validates empty data array of Queue object",
  () => {
    const obj = new Queue();
    expect(obj.data).toEqual([]);
  })

  test("validates enqueue operation performed on Queue-object: data Array!",
  () => {
    const obj = new Queue(5);
    obj.enqueue(5);
    expect(obj.data).toEqual([5]);
  })

  test("Validates dequeue operation performed on Queue-object: data Array",()=>{

      const obj = new Queue(5);
      obj.enqueue(5);
      obj.enqueue(6);
      obj.enqueue(7);
      obj.dequeue();
      expect(obj.data).toEqual([6,7]);
  });
  test("Validates FRONT operation performed on Queue-object: data Array",()=>{

    const obj = new Queue(5);
    obj.enqueue(5);
    obj.enqueue(6);
    obj.enqueue(7);
    obj.dequeue();
    let frontElement = obj.Front();
    expect(frontElement).toBe(obj.data[0] || 6);
});

test("Validates REAR operation performed on Queue-object: data Array",()=>{

    const obj = new Queue(5);
    obj.enqueue(5);
    obj.enqueue(6);
    let rearElement = obj.Rear();
    expect(rearElement).toBe(6);
});

 test("Verifies  Queue-isEmpty method!",()=>{
    const obj = new Queue(6);
    expect(obj.isEmpty()).toBe(true);
 });

 test("Verifies Queue-isFull method!",()=>{
    const obj = new Queue(2);
    obj.enqueue(1);
    obj.enqueue(2);
    expect(obj.isFull()).toBe(true);
 });

 test('Verfies maximum Size of Queue is updated when actual argument is passed',()=>{
     const obj = new Queue(100);
     expect(obj.maxCapacity).toBe(100);
 })

 test('Verifies maximum Size of Queue updated as per the given default value : 1000',()=>{
     const obj = new Queue();
     expect(obj.maxCapacity).toBe(1000);
 })