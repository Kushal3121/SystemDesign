// Imagine you go to Starbucks.
//     - You order a simple coffee ($5).
//     - Then you say: "Add milk (+$1)" → "Add caramel (+$2)" → "Add whipped cream (+$1.5)".
//     - Each add-on *decorates* your base coffee without changing its original class.
//     - That’s the Decorator Pattern!

// Technical Importance:
//     - Dynamically adds new behavior to objects without altering existing code.
//     - Promotes flexibility instead of using large inheritance chains.
//     - Follows Open-Closed Principle (open for extension, closed for modification).

// Problem:
class Coffee {
  cost() {
    return 5;
  }
}

// Now we want to add Milk, Caramel, etc.
// Wrong way: Create new subclasses like `MilkCoffee`, `CaramelCoffee`, `MilkCaramelCoffee`...
// That leads to class explosion! (too many combinations)

// Solution: Use Decorators
class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }
}

class CaramelDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }
}

class WhipDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1.5;
  }
}

// Usage
let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new CaramelDecorator(myCoffee);
myCoffee = new WhipDecorator(myCoffee);

console.log('Total Cost: $' + myCoffee.cost()); // 5 + 1 + 2 + 1.5 = 9.5

// When to Use Decorator
//     - To add responsibilities/features to objects at runtime.
//     - When subclassing would create too many unnecessary classes.
//     - Example: Logging, Authentication wrappers, UI component add-ons.

// In short:
//     - Decorator = “Wrapping” objects to extend their behavior dynamically.
//     - Think of it as “Add-ons” for your base class.
