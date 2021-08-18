const { test, expect } = require("@jest/globals");
const Stack = require("../stack");


test('creating a Stack object',()=>{
    const reciever = new Stack(5);
    const tester = new Stack(5);
    expect(
        JSON.stringify(reciever)).
        toBe(JSON.stringify(tester))
});

test("validates empty data array of Stack object",
  () => {
    const obj = new Stack();
    expect(obj.data).toEqual([]);
  })

  test("validates push operation performed of Stack-object: data Array!",
  () => {
    const obj = new Stack(5);
    obj.Push(5);
    expect(obj.data).toEqual([5]);
  })

  test("Validates pop operation performed of Stack-object: data Array",()=>{

      const obj = new Stack(5);
      obj.Push(5);
      obj.Push(6);
      obj.Push(7);
      obj.Pop();
      expect(obj.data).toEqual([5,6]);
  });
  test("Validates peek operation performed of Stack-object: data Array",()=>{

    const obj = new Stack(5);
    obj.Push(5);
    obj.Push(6);
    obj.Push(7);
    let peekItem = obj.Peek();
    expect(peekItem).toBe(7);
});

 test("Verifies  Stack-isEmpty method!",()=>{
    const obj = new Stack(6);
    expect(obj.IsEmpty()).toBe(true);
 });

 test("Verifies Stack-isFull method!",()=>{
    const obj = new Stack(2);
    obj.Push(1);
    obj.Push(2);
    expect(obj.IsFull()).toBe(true);
 });

 test('Verfies maximum Size of stack is updated when actual argument is passed',()=>{
     const obj = new Stack(100);
     expect(obj.MAX).toBe(100);
 })

 test('Verifies maximum Size of stack updated to given default value : 1000',()=>{
     const obj = new Stack();
     expect(obj.MAX).toBe(1000);
 })

 