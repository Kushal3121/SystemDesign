// Think of a family tree:
//     - A child inherits eye color, hair type, height from parents.
//     - But the child can also have unique traits.

// That's inheritance in OOP:
//     - One class (child) can reuse properties & methods of another class (parent).

// In OOP terms:
//     - Parent/Base Class = the general blueprint.
//     - Child/Derived Class = a more specific version that inherits everything from the parent.
//     - Child can also add new stuff or override parent's behavior.

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows`;
  }
}

// Usage
const dog = new Dog('Buddy');
console.log(dog.speak()); // Buddy barks

const cat = new Cat('Mittens');
console.log(cat.speak()); // Mittens meows
