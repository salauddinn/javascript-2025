// objects in javscript
// key value pairs
// name is key and "John" is value
// object is non-primitive data type
// non-primitive data types can store multiple values and complex data
// examples are objects and arrays
// primitive data types are number, string, boolean
let obj = {};
let employee = {
    name: "John",
    age: 30,
    position: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I work as a ${this.position}.`);
    }
};



// accessing object properties
console.log(employee.name, employee.age, employee.position);
// console.log(employee.skills, employee.skills[2]); // accessing array inside object
// console.log(employee.address.city); // accessing nested object property
// employee.greet(); 
employee.name = "Alice"; // updating existing property
employee.company = "Tech Solutions"; // adding new property
employee.age = 20; // updating existing property
employee.address.city = "Newtown"; // updating nested object property
console.log("before delete", employee);

// deleting property
delete employee.company;
console.log("after delete", employee);
// postion is there in employee object or not
console.log("-------Employee position  Check-------");

console.log("position" in employee);// true
console.log(employee.hasOwnProperty("position"))// true

console.log("-------Employee Salary property Check-------");
console.log("salary" in employee);// true
console.log(employee.hasOwnProperty("salary"))// true


if (employee.position) {
    console.log("position is present in employee object");
}
if (employee.hasOwnProperty("salary")) {
    console.log("salary is present in employee object");
} else {
    let salary = 50000;
    employee.salary = salary; // adding salary property if not present
}
let hello="world"
employee.org="MyOrg"
