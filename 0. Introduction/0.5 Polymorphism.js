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

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

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

const animals = [new Dog('Buddy'), new Cat('Mittens')];

// Same method: different result based on object type
animals.forEach((animal) => {
  console.log(animal.speak());
});
