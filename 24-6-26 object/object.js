// #### Task 1: Student Information System

console.log("Task 1");

var student = {
    rollNo : 7,
    name : "Ram",
    course : "fullstack",
    marks : 98 ,

}

// 1. Display all student details
console.log(student);

// 2. Update the marks
student.marks = 99;
console.log(student);

// 3. Add a new property `grade`
student.grade = 'A';
console.log(student);

// 4. Delete the `course` property
delete student.course;
console.log(student);

console.log("\n");


// ==============================================

// #### Task 2: E-Commerce Product

console.log("Task 2");


var product = {
    productId : 1,
    productName : "range rover",
    price : "₹4.55 Crore" ,
    stock : 50,

    productInfo : function ()
    {
        console.log(`product Id = ${this.productId} , product Name = ${this.productName} , product price = ${this.price} , product stock = ${this.stock}`);
    }
}
product.productInfo();

// 1. Display product details.
console.log(product);

// 2. Change the price.
product.price = "₹5 Crore";
console.log(product);


// 3. Add a property `category`.
product.category = "Luxury SUV";
console.log(product);


// 4. Remove the `stock` property.
delete product.stock ;
console.log(product);


// 5. Create a method `productInfo()` that displays all product information

product.productInfo();

console.log("\n");





// ==============================================

// #### Task 3: Employee Management

console.log("Task 3");


var employee = {
    empId : 4,
    empName : "krushna",
    department : "Finance",
    salary : 80000,

    showDetails : function ()
    {
        console.log(`Employee Id = ${this.empId} , Employee Name = ${this.empName} , Employee Depaetment = ${this.department} , Employee Salary = ${this.salary}`);
    }
}
employee.showDetails();


// 1. Display employee details
console.log(employee);

//  2. Increase salary by 10%
employee.salary = employee.salary + (employee.salary*10/100);
console.log(employee);

// 3. Add a property `experience`
employee.experience = "5 year";
console.log(employee);

// 4. Delete the `department` property
delete employee.department;
console.log(employee);


// 5. Create a method `showDetails()` to display employee information.
employee.showDetails();

console.log("\n");

// ==============================================



// #### Task 4: Bank Account

console.log("Task 4");

var account = {
    accountNumber : 12345678907,
    holderName : "Radha",
    balance : 200000,

    checkBalance : function ()
    {
        console.log(`Account Number = ${this.accountNumber} , Holder Name = ${this.holderName} , Balance = ${this.balance}`);
    }

}
account.checkBalance();

// 1. Display account details
console.log(account);


// 2. Deposit ₹5000 into the balance
account.balance = account.balance + 5000;
console.log(account);


// 3. Add a property `accountType`
account.accountType = "Savings Account";
console.log(account);

//  4. Delete the `accountType` property
delete account.accountType;
console.log(account);


// 5. Create a method `checkBalance()` that displays the current balance
account.checkBalance();


console.log("\n");


// ==============================================


// #### Task 5: Movie Booking System

console.log("Task 5");

var movie = {
    movieName : "Lalo",
    ticketPrice : 350,
    availableSeats : 50,
    theatreName : "Reliance mall",

    movieInfo : function ()
    {
        console.log(`Movie Name = ${this.movieName} , Ticket Price = ${this.ticketPrice} , Available Seats = ${this.availableSeats} , Theatre Name = ${this.theatreName}`);
    }
}
movie.movieInfo();

// 1. Display movie details.
console.log(movie);

// 2. Update the ticket price.
movie.ticketPrice = 400;
console.log(movie);

// 3. Add a property `showTime`.
movie.showTime = "4:00pm to 7:00pm";
console.log(movie);

// 4. Delete the `theatreName` property.
delete movie.theatreName;
console.log(movie);

// 5. Create a method `movieInfo()` that displays complete movie information.
movie.movieInfo();















