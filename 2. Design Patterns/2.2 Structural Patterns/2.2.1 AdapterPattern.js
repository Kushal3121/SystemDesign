// Imagine you travel to another country, but your phone charger plug doesn’t fit the wall socket.
// You buy an "Adapter" that converts your charger plug shape to fit the socket.
// Adapter makes incompatible interfaces work together.

// Technical Importance:
//   - Converts the interface of a class into another interface clients expect.
//   - Helps integrate old code (legacy systems) with new code.
//   - Useful in systems where you can’t modify existing classes.

// Example Problem:
class OldPaymentGateway {
  makePayment(amount) {
    console.log(`Payment of $${amount} made using Old Gateway`);
  }
}

class NewPaymentSystem {
  pay(amountInDollars) {
    console.log(`Payment of $${amountInDollars} made using New System`);
  }
}

// Client code only understands NewPaymentSystem
// But we have an old gateway → incompatible interface

// Solution: Create Adapter
class PaymentAdapter {
  constructor(oldGateway) {
    this.oldGateway = oldGateway;
  }

  pay(amount) {
    // Adapt the interface
    this.oldGateway.makePayment(amount);
  }
}

// Usage
const oldGateway = new OldPaymentGateway();
const adapter = new PaymentAdapter(oldGateway);

adapter.pay(100); // Works like NewPaymentSystem

// When to Use Adapter
//     - When existing classes don’t match the new interface.
//     - When you’re integrating legacy or third-party code.
//     - Example: Connecting old database driver to new ORM, or converting API responses.

// In short: Adapter = Translator between two incompatible interfaces.
