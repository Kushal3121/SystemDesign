// Think of a magic button:
//     - When a dog presses it → it says “Bark!”
//     - When a cat presses it → it says “Meow!”
//     - When a cow presses it → it says “Moo!”
// It's the same button (same method), but it behaves differently depending on who presses it.

// That's polymorphism:
//     - One method name, many behaviors.

// In OOP terms:
//     - Different classes can define the same method in their own way.
//     - When you call the method, the correct version is picked based on the object.

// No inheritance needed - just same method names
class Dog {
  makeSound() {
    return 'Woof! Woof!';
  }

  move() {
    return 'Running on four legs';
  }
}

class Cat {
  makeSound() {
    return 'Meow! Meow!';
  }

  move() {
    return 'Sneaking silently';
  }
}

class Duck {
  makeSound() {
    return 'Quack! Quack!';
  }

  move() {
    return 'Swimming and flying';
  }
}

class Robot {
  makeSound() {
    return 'Beep! Boop!';
  }

  move() {
    return 'Rolling on wheels';
  }
}

// Polymorphic functions - work with any object that has these methods
function animalActions(animal) {
  console.log(`Sound: ${animal.makeSound()}`);
  console.log(`Movement: ${animal.move()}`);
}

// Usage - "If it walks like a duck and quacks like a duck..."
const creatures = [
  new Dog(),
  new Cat(),
  new Duck(),
  new Robot(), // Not even an animal, but has the same interface!
];

creatures.forEach((creature) => animalActions(creature));
