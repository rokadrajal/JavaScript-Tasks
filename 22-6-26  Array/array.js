// Q-1 Basic Operations: push and pop method used

console.log("Q-1");
var numbers = [1,2,3];
console.log(numbers);

numbers.push(4);
console.log(numbers);

numbers.pop()
console.log(numbers);

console.log("\n");



// Q-2 Queue Simulation: push and shift method used

console.log("Q-2");

var queue = [];
queue.push(1);
console.log(queue);
queue.push(2);
console.log(queue);
queue.push(3);
console.log(queue);

queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);

console.log("\n");



//Q-3 Stack Simulation: push and pop method used

console.log("Q-3");

var stack = [];
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);

stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

console.log("\n");



// Q-4 Insertion and Deletion at the Beginning: unshift and shift method used

console.log("Q-4");

var letters = ['b','c'];
console.log(letters);

letters.unshift('a');
console.log(letters);

letters.shift();
console.log(letters);

console.log("\n");



// Q-5 Array Reversal: pop and unshift method used

console.log("Q-5");

var original = [11,12,13,14,15];
console.log(original);

for(let i=original.length-1; i>=0; i--)
{
    console.log(original[original.unshift()-1]);
    original.pop();
}

console.log("\n");




// Q-6 Updating an Array: push , pop , unshift and shift method used

console.log("Q-6");

var names = ['John','Jane','Doe'];
console.log(names);

names.push('Smith');
console.log(names);

names.pop();
console.log(names);

names.unshift('Alice');
console.log(names);

names.shift();
console.log(names);

console.log("\n");




// Q-7 Array Length Changes: push , pop , unshift and shift method used

console.log("Q-7");

var fruits = ['apple','orange','banana'];
console.log(fruits);

fruits.push('grapes');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('pear');
console.log(fruits);

fruits.shift();
console.log(fruits);


console.log("\n");



// Q-8 Remove First Element : splice method used

console.log("Q-8");

var arr = [10,20,30,40,50];
console.log(arr);

arr.splice(0,1);
console.log(arr);









