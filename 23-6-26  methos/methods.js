// Q-1 sort() method used

console.log("Q-1");

let numbers = [3,1,4,1,5,9,2,6,5,3,5];
console.log(numbers);

var sorting = numbers.sort((a,b)=>{
    return a - b;
});
console.log("The sorted array :",sorting);

console.log("\n");


// Q-2 every() method used

console.log("Q-2");

let numbers2 = [2,4,6,8,10];


var even = numbers2.every((element)=>{
    return element%2 == 0;

});
console.log(`${even} (since all numbers are even)`);

console.log("\n");



// Q-3 some() method used

console.log("Q-3");

let numbers3 = [1,3,5,7,8,9];

var num = numbers3.some((element)=>{
    console.log(element);
    return element%2 == 0;

})
console.log(num);

console.log("\n");



// Q-4  map , forEach and filter method used

console.log("Q-4");


//forEach

console.log("Q-4 => forEach");


var arr = [10 , 23 , 45 , 2 , 34 , 7 , 18 , 86 , 100 , 2];
console.log(arr);

arr.forEach(()=>{
    console.log(arr);
});

console.log("\n");



// map

console.log("Q-4 => map");

var arr2 = [1 , 7 , 12 , 25 , 8];
console.log(arr2);

var square = arr2.map((number)=>{
    return number*number;
})
console.log(square);

console.log("\n");



// filter

console.log("Q-4 => filter");

var arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(arr3);

var odd = arr3.filter(function (element2){
    return element2%2 != 0;
})
console.log(odd);

console.log("\n");


// filter

console.log("Q-4 => filter");


var arr4 = [52 , 57 , 59 , 81 , 103 , 85 , 56 , 98 , 100 , 90];
console.log(arr4);

var large = arr4.filter(function (element3){
    return element3>50;
})
console.log(large);
console.log("\n");



// Create an array of 8 numbers and:

// map()

console.log("Q-4 => map");

var arr5 = [10 , 8 , 21 , 105 , 23 , 154 , 8 , 20];
console.log(arr5);

var multiply = arr5.map(function (element4){
    return element4*5;
})
console.log(multiply);
console.log("\n");


// filter

console.log("Q-4 => filter");

var largest = arr5.filter(function (element5){
    return element5 > 100;
})
console.log(largest);
console.log("\n");



// forEach

console.log("Q-4 => forEach");

var each = arr5.forEach((element6)=>{
    return element6;
})
console.log(each);











