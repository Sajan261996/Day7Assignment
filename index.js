//1.	Create an array of numbers and return only even numbers using filter().

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = arr.filter(n => n % 2 === 0);
console.log(even);


//2.	Build an object Laptop with properties: brand, ram, price. Add a method details().
let Laptop = {
    brand: "Dell",
    ram: "8GB",
    price: 50000,

    details: function() {
        console.log(`Brand: ${this.brand}, RAM: ${this.ram}, Price: ${this.price}`);
    }
};
Laptop.details();

//3.	Write a program that takes an array of marks and prints highest, lowest, and average.
let marks = [78, 85, 92, 60, 74, 88, 95];
let highest = Math.max(...marks);
console.log("Highest:", highest);

let lowest = Math.min(...marks);
console.log("Lowest:", lowest);

let sum = marks.reduce((a,b) => a + b, 0);
let average = sum / marks.length;
console.log("Average:", average);

//4.	Extend the Student Records App: Add a function addStudent() that takes user input.
let students = [
    { name: "Amit", age: 20, marks: 85 },
    { name: "Sita", age: 19, marks: 92 },
    { name: "Rohan", age: 21, marks: 78 }
];
function addStudent() {
    let name = prompt("Enter student name:");
    let age = parseInt(prompt("Enter age:"));      
    let marks = parseFloat(prompt("Enter marks:")); 
    let newStudent = { name, age, marks };
    students.push(newStudent);
    
    console.log("New student added!");
    console.log(students);
}
addStudent();
