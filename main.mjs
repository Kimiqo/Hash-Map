import hashMap from "./hashMap.mjs";

const test = new hashMap();
// console.log(test);
// console.log(test.set("apple","red"));
// console.log(test.set("carrot","orange"));
// console.log(test.set("banana","yellow"));
// console.log(test.get("apple"));
// console.log(test.get("carrot"));
// console.log(test.get("banana"));
// console.log(test.has("banana"));
// // console.log(test.remove("banana"));
// console.log(test.length());
// console.log(test.keys());
// console.log(test.value());
// console.log(test.clear());

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('moon', 'silver');

console.log(test.bucket);

// test.set('apple', 'blueGreen');

console.log(test.entries());
// console.log(test.clear());
// console.log(test.bucket);




// console.log(test.set('apple', 'red'));
// console.log(test.set('banana', 'yellow'));
// console.log(test.set('carrot', 'orange'));
// console.log(test.set('dog', 'brown'));
// console.log(test.set('elephant', 'gray'));
// console.log(test.set('frog', 'green'));
// console.log(test.set('grape', 'purple'));
// console.log(test.set('hat', 'black'));
// console.log(test.set('ice cream', 'white'));
// console.log(test.set('jacket', 'blue'));
// console.log(test.set('kite', 'pink'));
// console.log(test.set('lion', 'golden'));