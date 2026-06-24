// Recursion Function 
// 1. Write a recursive function to generate Armstrong Number series up to n terms.


// function Armstrong(num) {
//     var str = String(num);
//     var orignalNumber = num;
//     var sum = 0;

//     function calculate(n) {

//         if (n == 0) {
//             return sum;
//         }
//         var mul = 1;
//         var temp = n % 10;

//         for (let i = 0; i < str.length; i++) {
//             mul *= temp;
//         }
//         sum+=mul;

//         return calculate(parseInt(n / 10));
//     }

//     calculate(num);

//     return sum == orignalNumber;

// }


// for(let i=0; i<1000; i++)
// {
//     if(Armstrong(i))
//     {
//         console.log(i);
//     }
// }



function Armstrong(num) {

    var str = String(num);
    var originalNumber = num;
    var sum = 0;

    while(num > 0) {

        var temp = num % 10;
        var mul = 1;

        for(let i = 0; i < str.length; i++) {
            mul *= temp;
        }

        sum += mul;

        num = parseInt(num / 10);
    }

    return sum == originalNumber;
}


for(let i = 0; i < 1000; i++) {
    if(Armstrong(i)) {
        console.log(i);
    }
}










// var n = 153;
// var str = String("153");
// var orignalNumber = n;
// var sum = 0;


// while (n > 0) {
//     var mul = 1;
//     var temp =  n%10;
//     n = parseInt(n/10);

//     for (let i = 0; i < str.length; i++) {
//         mul*=temp;
//     }
//     sum+=mul;
// }




// if(orignalNumber == sum)
// {
//     console.log("Armstrong");
// }
// else
// {
//     console.log("Not Armstrong");

// }












//Expression Function
// 1. Build a modular billing system using functions.

// var product = [{ "P_name": "Pen", "Price": "20", "quantity": "20" }, { "P_name": "Book", "Price": "80", "quantity": "12" }, { "P_name": "Color", "Price": "20", "quantity": "2" }];

// var calculateTotal = function (product) {
//     let total = 0;

//     for (let i = 0; i < product.length; i++) {
//         total += product[i].Price * product[i].quantity;
//     }

//     return total;

// }


// var calculateDiscount = function (total) {
//     var discount = 0;

//     if (total <= 200) {
//         discount = total * 2 / 100;
//     }
//     else if (total <= 500) {
//         discount = total * 5 / 100;
//     }
//     else {
//         discount = total * 10 / 100;
//     }

//     return discount;
// }


// var FinalBill = function (product) {
//     var total = calculateTotal(product);
//     var discount = calculateDiscount(total);
//     var finalamount = total - discount;

//     console.log("Total Amount :", total);
//     console.log("Discount :", discount);
//     console.log("Final Bill :", finalamount);
// }

// FinalBill(product);




// Arrow Function
// 1. Create a tax calculator with slab logic via functions.

// var income = Number(prompt("Enter your income :"));

// var taxcalculate = (income)=>
// {
//     var tax = 0;

//     if(income <= 250000)
//     {
//         tax = 0;
//     }
//     else if(income >= 500000)
//     {
//         tax = (income - 250000)*5/100;
//     }
//     else if(income >= 1000000)
//     {
//         tax = (250000*5/100) + (income - 500000)*10/100;
//     }
//     else
//     {
//         tax = (250000*5/100) + (500000*10/100) + (income - 1000000)*15/100;
//     }
//     return tax;

// }

// var result = taxcalculate(income);
// console.log("Total Tax :",result);










//IIFE Function :
// 1. Write a function to validate a 6-digit OTP.



// (function () {
//     var otp = Math.floor(Math.random() * 100000) + 100000;
//     console.log(otp);

//     var num = Number(prompt("Enter the number :"));
//     console.log("Rendom Number :",num);

//     if(num == otp)
//     {
//         alert("Valid OTP");
//     }
//     else
//         alert("Not valid OTP");


// })();