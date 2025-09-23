// Think of building a LEGO house:
//     - You don’t dump all pieces at once.
//     - You go step by step:
//         1. First the floor
//         2. Then the walls
//         3. Then the roof
//     - At the end, you get a complete house.
// Use Builder when you want to construct a complex object step by step, instead of passing a giant constructor with 10+ parameters.

// Used for creating complex objects (lots of parts/options).
//     - Instead of a huge constructor:
//         const car = new Car("red", "V8", true, false, 4, "leather", ...);

//     - You build it step by step:
//         const car = new CarBuilder()
//                     .setColor("red")
//                     .setEngine("V8")
//                     .addGPS()
//                     .build();

// Problem: Complex constructor with many parameters
class Car {
  constructor(color, engine, gps, sunroof) {
    this.color = color;
    this.engine = engine;
    this.gps = gps;
    this.sunroof = sunroof;
  }
}

// const car = new Car('red', 'V8', true, false);
console.log(car);

// Solution: Use a builder to set properties step by step
class Car {
  constructor(builder) {
    this.color = builder.color;
    this.engine = builder.engine;
    this.gps = builder.gps;
    this.sunroof = builder.sunroof;
  }
}

class CarBuilder {
  setColor(color) {
    this.color = color;
    return this; // allows chaining
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  addGPS() {
    this.gps = true;
    return this;
  }

  addSunroof() {
    this.sunroof = true;
    return this;
  }

  build() {
    return new Car(this);
  }
}

// Usage
const car = new CarBuilder().setColor('red').setEngine('V8').addGPS().build();
console.log(car);

// Real-World Examples
//     1. SQL query builders (knex.js, Prisma).
//     2. UI builders (React component factories).
//     3. HTTP request builders (like fetch wrappers).
