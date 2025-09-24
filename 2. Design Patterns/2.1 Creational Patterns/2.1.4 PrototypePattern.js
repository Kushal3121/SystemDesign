// Imagine you’re making art projects with Play-Doh:
//     - Instead of creating a new sculpture from scratch each time.
//     - You just copy (clone) an existing one and tweak it (add a hat, change color).
// Create new objects by cloning existing ones, instead of always building from scratch.

// Technical Importance:
//     - Used when object creation is expensive (time-consuming or resource-heavy).
//     - Instead of re-building, just clone.
//     - Good when you need many similar objects with small differences.
//     - Examples:
//         1. Video games → clone enemy characters with different stats.
//         2. Graphic editors → duplicate shapes.
//         3. Document editors → copy-paste objects.

// Problem: Creating complex objects from scratch is costly
class Car {
  constructor(color, engine, gps) {
    this.color = color;
    this.engine = engine;
    this.gps = gps;
  }
}

// const car1 = new Car('red', 'V8', true);
// const car2 = new Car('red', 'V8', true); // rebuilt again

// Solution: Clone existing objects and tweak as needed
class Car {
  constructor(color, engine, gps) {
    this.color = color;
    this.engine = engine;
    this.gps = gps;
  }

  clone() {
    return new Car(this.color, this.engine, this.gps);
  }
}

// Usage
const car1 = new Car('red', 'V8', true);
const car2 = car1.clone(); // clone existing car

car2.color = 'blue'; // tweak only what you need

console.log(car1); // { color: "red", engine: "V8", gps: true }
console.log(car2); // { color: "blue", engine: "V8", gps: true }
