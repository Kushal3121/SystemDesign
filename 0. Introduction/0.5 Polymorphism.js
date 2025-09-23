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

// Inheritance vs Polymorphism
// E-commerce system example
class PaymentProcessor {
  constructor(amount) {
    this.amount = amount;
  }

  // Common method (inheritance)
  validateAmount() {
    return this.amount > 0;
  }

  // To be overridden (polymorphism)
  processPayment() {
    throw new Error('Must implement processPayment method');
  }
}

class CreditCardPayment extends PaymentProcessor {
  constructor(amount, cardNumber) {
    super(amount); // Inheritance
    this.cardNumber = cardNumber;
  }

  // Polymorphic implementation
  processPayment() {
    console.log(
      `Processing $${this.amount} via Credit Card ****${this.cardNumber.slice(
        -4
      )}`
    );
    return { success: true, method: 'credit_card' };
  }
}

class PayPalPayment extends PaymentProcessor {
  constructor(amount, email) {
    super(amount); // Inheritance
    this.email = email;
  }

  // Polymorphic implementation
  processPayment() {
    console.log(`Processing $${this.amount} via PayPal (${this.email})`);
    return { success: true, method: 'paypal' };
  }
}

class ApplePayPayment extends PaymentProcessor {
  constructor(amount, deviceId) {
    super(amount); // Inheritance
    this.deviceId = deviceId;
  }

  // Polymorphic implementation
  processPayment() {
    console.log(
      `Processing $${this.amount} via Apple Pay (Device: ${this.deviceId})`
    );
    return { success: true, method: 'apple_pay' };
  }
}

// Polymorphic function
function checkout(paymentMethod) {
  if (paymentMethod.validateAmount()) {
    // Inherited method
    return paymentMethod.processPayment(); // Polymorphic method
  } else {
    return { success: false, error: 'Invalid amount' };
  }
}

// Usage
const payments = [
  new CreditCardPayment(99.99, '1234567812345678'),
  new PayPalPayment(149.5, 'user@example.com'),
  new ApplePayPayment(75.25, 'iPhone-12-Pro'),
];

payments.forEach((payment) => {
  const result = checkout(payment); // Same function, different behaviors
  console.log('Result:', result);
});
