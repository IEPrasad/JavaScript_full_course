// Definition of JavaScript Objects:

//     JavaScript objects are collections of key-value pairs where the keys (also known as properties) 
//     are strings, and the values can be any type of data (numbers, strings, arrays, functions, or other 
//     objects). Objects in JavaScript allow you to store related data and functionality together, making 
//     them a fundamental building block for writing organized and modular code.

    

// Sample Code for a JavaScript Object:


    // Creating a JavaScript object
let car = {
    brand: "Toyota",           // Property (key-value pair)
    model: "Corolla",
    year: 2020,
    startEngine: function() {  // Method (function inside an object)
        console.log("Engine started for " + this.brand + " " + this.model);
    }
};

// Accessing properties
console.log(car.brand);        // Output: Toyota
console.log(car.year);         // Output: 2020

// Calling a method
car.startEngine();             // Output: Engine started for Toyota Corolla

// Adding a new property
car.color = "Red";
console.log(car.color);        // Output: Red

// Modifying an existing property
car.year = 2021;
console.log(car.year);         // Output: 2021


// Key Points about JavaScript Objects:

//     Properties: Key-value pairs where the key is a string (or symbol) and the value can be any data type.
//     Methods: Functions that are stored as property values within the object.
//     Dynamic: You can add, modify, or remove properties and methods at runtime.
//     this Keyword: Refers to the current object inside methods, used to access other properties or methods within the same object.





