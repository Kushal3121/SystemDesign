// Imagine you have a toy box.
//     - Inside, you have toy cars, toy planes, toy boats.
//     - If your box says “any toy vehicle can be played with”, then all vehicles should behave like vehicles.
//     - If one day you put a “toy fish” in the box and it doesn’t roll, fly, or move like a vehicle, you'd be disappointed.

// If B is a child of A, then anywhere you can use A, you should also be able to use B without breaking things.

// Problem: A Penguin is a Bird, but if you treat it like a Bird, things break.
class Bird {
  fly() {
    console.log('Flying high!');
  }
}

class Sparrow extends Bird {} // ok
class Penguin extends Bird {
  // problem
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

// Usage
function makeItFly(bird) {
  bird.fly();
}

makeItFly(new Sparrow()); // Works
makeItFly(new Penguin()); // Breaks expectation

// Solution: Split into more specific classes
class Bird {
  // Common bird behavior
}

class FlyingBird extends Bird {
  fly() {
    console.log('Flying high!');
  }
}

class NonFlyingBird extends Bird {
  walk() {
    console.log('Walking on land!');
  }
}

class Sparrow extends FlyingBird {}
class Penguin extends NonFlyingBird {}

// Usage
function letItFly(bird) {
  if (bird instanceof FlyingBird) {
    bird.fly();
  }
}

letItFly(new Sparrow()); // Works
letItFly(new Penguin()); // No crash, behaves correctly
// Instead of forcing all Birds to fly, we separated into FlyingBird and NonFlyingBird.
// Now subtypes don't break parent expectations.
