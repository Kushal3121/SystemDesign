// Think of your gaming console (like a PlayStation).
//     - The console itself doesn't change when you buy a new game.
//     - You just plug in a new disc/cartridge and it works.
//     - If the console needed to be rebuilt every time a new game released, it would be a nightmare.

// Things should be open for extension but closed for modification.
//     - Open for extension → You can extend behavior (add new features).
//     - Closed for modification → You don’t need to touch old code.
//     - Achieved by abstraction (interfaces, base classes, strategy patterns, etc.).
// You should be able to add new features without changing old code.

// Problem: PaymentProcessor class needs changes for every new payment type
class PaymentProcessor {
  pay(amount, type) {
    if (type === 'creditcard') {
      console.log(`Processing credit card payment of $${amount}`);
    } else if (type === 'paypal') {
      console.log(`Processing PayPal payment of $${amount}`);
    } else if (type === 'crypto') {
      console.log(`Processing Crypto payment of $${amount}`);
    }
  }
}

// Usage
const processor = new PaymentProcessor();
processor.pay(100, 'creditcard');

// Solution: Use abstraction to allow new payment types without modifying existing code
// Base abstraction
class PaymentMethod {
  pay(amount) {
    throw new Error('Method not implemented');
  }
}

// Extensions
class CreditCardPayment extends PaymentMethod {
  pay(amount) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPayment extends PaymentMethod {
  pay(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// Processor uses abstraction
class PaymentProcessor {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  process(amount) {
    this.paymentMethod.pay(amount);
  }
}

// Usage
const processor1 = new PaymentProcessor(new CreditCardPayment());
processor1.process(100);

const processor2 = new PaymentProcessor(new PayPalPayment());
processor2.process(250);
