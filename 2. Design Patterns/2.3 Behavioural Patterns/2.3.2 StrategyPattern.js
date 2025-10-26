// Imagine you’re using Google Maps.
//     - You can choose to travel by Car, Bike, or Walk.
//     - Each option gives you a different route and travel time.
//     - You don’t need 3 separate apps — just change the strategy.
// The Strategy Pattern lets you switch between different algorithms easily, without changing the main code.

// Technical Importance:
//     - Defines a family of algorithms (strategies) and makes them interchangeable.
//     - Separates the logic for choosing *how* something is done from *what* is done.
//     - Follows the Single Responsibility and Open–Closed Principles.

// Problem: The travel logic is inside one class.
//     - Every time we add a new travel mode (like 'train'), we must modify the code.
//     - Leads to long if–else statements.
//     - Violates Open–Closed Principle.

class Travel {
  travel(mode) {
    if (mode === 'car') {
      console.log('Traveling by car: Fast but costly 🚗');
    } else if (mode === 'bike') {
      console.log('Traveling by bike: Eco-friendly 🛵');
    } else if (mode === 'walk') {
      console.log('Traveling by walk: Healthy but slow 🚶');
    } else {
      console.log('Invalid travel mode!');
    }
  }
}

const trip = new Travel();
trip.travel('car');
trip.travel('walk');

// Solution: Define each travel mode as a separate strategy.
//     - Each strategy class handles its own travel behavior.
//     - The main TravelContext class only uses whichever strategy we plug in.
//     - Now we can add new travel modes without touching the main code.

class CarStrategy {
  travel() {
    console.log('Traveling by car: Fast but costly 🚗');
  }
}

class BikeStrategy {
  travel() {
    console.log('Traveling by bike: Eco-friendly 🛵');
  }
}

class WalkStrategy {
  travel() {
    console.log('Traveling by walk: Healthy but slow 🚶');
  }
}

// Context class
class TravelContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  startJourney() {
    this.strategy.travel();
  }
}

// Usage
const myTrip = new TravelContext();

myTrip.setStrategy(new CarStrategy());
myTrip.startJourney(); // 🚗 Traveling by car: Fast but costly

myTrip.setStrategy(new BikeStrategy());
myTrip.startJourney(); // 🛵 Traveling by bike: Eco-friendly

myTrip.setStrategy(new WalkStrategy());
myTrip.startJourney(); // 🚶 Traveling by walk: Healthy but slow

// We can easily add a new mode later:
class TrainStrategy {
  travel() {
    console.log('Traveling by train: Smooth and scenic 🚆');
  }
}

myTrip.setStrategy(new TrainStrategy());
myTrip.startJourney(); // 🚆 Traveling by train: Smooth and scenic

// Benefits:
//     - Easy to add new strategies without modifying old code.
//     - Reduces if–else clutter.
//     - Encourages flexibility and cleaner design.

// In short:
//     - Strategy Pattern = "Pick your travel mode" (algorithm selection at runtime).
//     - Think “Google Maps route options” or “Choose payment method in an app”.
