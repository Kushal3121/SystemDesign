// Think of a pizza shop:
//     - You don’t make the pizza yourself.
//     - You just order “Margherita” or “Pepperoni,” and the kitchen (factory) creates it for you.
//     - You don’t care how it’s made, just that you get the correct pizza.
// Let a factory method handle object creation so that the client doesn’t need to know the creation logic.

// Technical Importance:
//     - Instead of using new everywhere, delegate creation to a factory method.
//     - Benefits:
//         1. Encapsulates object creation logic.
//         2. Makes code flexible → adding new types doesn’t break old code.
//         3. Often used with polymorphism.
//     - Examples:
//         1. Payment gateway → createPayment("paypal").
//         2. Notification system → createNotification("email").

// Problem: Client code must know all classes to instantiate
class Dog {
  speak() {
    console.log('Woof!');
  }
}

class Cat {
  speak() {
    console.log('Meow!');
  }
}

// Client must know classes
// const pet1 = new Dog();
// const pet2 = new Cat();

pet1.speak(); // Woof!
pet2.speak(); // Meow!

// Solution: Use a factory to create objects
class AnimalFactory {
  static createAnimal(type) {
    if (type === 'dog') {
      return new Dog();
    } else if (type === 'cat') {
      return new Cat();
    } else {
      throw new Error('Unknown animal type');
    }
  }
}

class Dog {
  speak() {
    console.log('Woof!');
  }
}

class Cat {
  speak() {
    console.log('Meow!');
  }
}

// Client only calls factory
const pet1 = AnimalFactory.createAnimal('dog');
const pet2 = AnimalFactory.createAnimal('cat');

pet1.speak(); // Woof!
pet2.speak(); // Meow!

// We can even combine with Open/Closed Principle:
class AnimalFactory {
  static createAnimal(type) {
    const animals = {
      dog: Dog,
      cat: Cat,
      bird: Bird,
    };
    const Animal = animals[type];
    if (!Animal) throw new Error('Unknown animal type');
    return new Animal();
  }
}

class Dog {
  speak() {
    console.log('Woof!');
  }
}
class Cat {
  speak() {
    console.log('Meow!');
  }
}
class Bird {
  speak() {
    console.log('Tweet!');
  }
}

// Usage
const pet = AnimalFactory.createAnimal('bird');
pet.speak(); // Tweet!
