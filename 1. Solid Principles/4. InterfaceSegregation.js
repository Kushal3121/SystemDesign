// Imagine a TV remote.
//     - If the remote had 100 buttons (most of which you never use), it would be annoying.
//     - You just want simple remotes:
//         - One for TV (power, volume, channel).
//         - One for AC (temperature, mode).
// A universal remote with too many buttons violates this principle.

// Don't force someone to depend on things they don't use.
// Instead, give smaller, more specific interfaces.

// Problem: Machine interface is too big for SimplePrinter
// One big interface
class Machine {
  print() {}
  scan() {}
  fax() {}
}

// SimplePrinter doesn’t need scan or fax
class SimplePrinter extends Machine {
  print() {
    console.log('Printing...');
  }
  scan() {
    throw new Error('Scan not supported');
  }
  fax() {
    throw new Error('Fax not supported');
  }
}

// Solution: Split into smaller interfaces
// Smaller, focused interfaces
class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

class Fax {
  fax() {}
}

// Devices can pick what they need
class SimplePrinter extends Printer {
  print() {
    console.log('Printing...');
  }
}

class MultiFunctionPrinter {
  constructor(printer, scanner, fax) {
    this.printer = printer;
    this.scanner = scanner;
    this.fax = fax;
  }

  print() {
    this.printer.print();
  }

  scan() {
    this.scanner.scan();
  }

  fax() {
    this.fax.fax();
  }
}

// Usage
const simple = new SimplePrinter();
simple.print();

const allInOne = new MultiFunctionPrinter(
  new SimplePrinter(),
  { scan: () => console.log('Scanning...') },
  { fax: () => console.log('Faxing...') }
);

allInOne.print();
allInOne.scan();
allInOne.fax();
// Fix: Now, devices only depend on the parts they actually need.
//     - SimplePrinter only implements Printer.
//     - MultiFunctionPrinter can combine all three.

// Difference Between SRP and ISP:
// Single Responsibility Principle (SRP)
//     - Scope: Applies to classes/modules/functions.
//     - Goal: Each should have one job / one reason to change.
//     - Problem it solves: Avoids mixing responsibilities in one class.
//     - Example analogy: A school bag should just carry books, not cook food.
// SRP cares about “what one class is responsible for.”

// Interface Segregation Principle (ISP)
//     - Scope: Applies to interfaces/contracts (or in JS, abstract classes or expected APIs).
//     - Goal: Don’t force a class to implement methods it doesn’t need.
//     - Problem it solves: Avoids “fat” interfaces where clients depend on useless stuff.
//     - Example analogy: A TV remote shouldn’t have 100 buttons if you only use 5.
// ISP cares about “what methods a class is forced to use.”
