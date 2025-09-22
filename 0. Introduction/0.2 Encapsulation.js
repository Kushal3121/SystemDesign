// Think of a TV remote.
//     - You only see the buttons (volume up, change channel).
//     - You don't see the complicated circuits inside.
// That's encapsulation: hiding the internal mess and only showing what’s necessary.

// In OOP terms:
//     - Encapsulation = bundling data + methods together in a class.
//     - It also means hiding sensitive details (only exposing safe parts).

class BankAccount {
  #balance = 0; // private property (hidden from outside)

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance; // controlled access
  }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(40);

console.log(account.getBalance()); // 60
// console.log(account.#balance); // ERROR: balance is private
