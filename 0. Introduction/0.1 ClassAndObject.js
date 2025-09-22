// Defining a class (the blueprint)
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    return `The ${this.color} ${this.brand} is driving 🚗`;
  }
}

// Creating objects (real cars)
const car1 = new Car('Toyota', 'Red');
const car2 = new Car('Tesla', 'Blue');

console.log(car1.drive()); // "The Red Toyota is driving"
console.log(car2.drive()); // "The Blue Tesla is driving"

// Key Concepts:
// Blueprint vs Instance
//     Class = design/recipe
//     Object = real thing created from it

// Constructor (constructor() in JS)
//     Special function inside a class
//     Runs automatically when you create an object using new

// Properties (fields / attributes)
//     Data that belongs to the object (e.g., brand, color)

// Methods (functions inside class)
//     Actions the object can do (e.g., drive())

// Multiple objects
//     You can create many objects from the same class, each with its own unique values.

// this keyword
//     Refers to the current object
//     Without this, you can’t properly link the property to the object.

// Objects outside classes (plain objects)
//     In JS, you can also create objects without classes:
//     const car = { brand: "Toyota", color: "Red" };
//     But with classes, you can create reusable blueprints for many objects.
