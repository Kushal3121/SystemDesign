// When you drive a car:
//     - You press the accelerator → car speeds up.
//     - You don't care how the engine burns fuel, mixes air, fires pistons, etc.

// That's abstraction:
//     - Show only the essential details.
//     - Hide all the complex background work.

// In OOP terms:
//     - Abstraction = hiding unnecessary details and only exposing what matters.
//     - Think of it as: “Tell me what to do, not how to do it.”

class CoffeeMachine {
  start() {
    this._boilWater();
    this._brewCoffee();
    console.log('Your coffee is ready');
  }

  // Internal details (hidden from user)
  _boilWater() {
    console.log('Boiling water...');
  }

  _brewCoffee() {
    console.log('Brewing coffee...');
  }
}

const myMachine = new CoffeeMachine();
myMachine.start();

// Output:
// Boiling water...
// Brewing coffee...
// Your coffee is ready

// myMachine._boilWater(); Not meant to be called directly
