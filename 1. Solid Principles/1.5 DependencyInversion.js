// Imagine you love playing with LEGO blocks.
//     - LEGO pieces can fit together because they connect using a universal connector.
//     - You don't care if the piece is a car, a house, or a spaceship — they all work because they follow the same connector rule.

// High-level things (like your LEGO creation) should depend on abstractions (the connector), not on the details (specific block shapes).
// High-level modules (business logic) shouldn’t depend on low-level modules (like DB, API, FileSystem).
// Both should depend on abstractions (interfaces/contracts).

// Problem: High-level class depends directly on low-level class
class MySQLDatabase {
  save(data) {
    console.log('Saving to MySQL:', data);
  }
}

class UserService {
  constructor() {
    this.database = new MySQLDatabase(); // tightly coupled
  }

  addUser(user) {
    this.database.save(user);
  }
}

// Usage
const service = new UserService();
service.addUser({ name: 'Alice' });
// UserService is tightly coupled to MySQLDatabase.
// If we want to use MongoDB, we must change UserService code → bad

// Solution: Depend on abstractions, not concrete classes
// Abstraction
class Database {
  save(data) {
    throw new Error('Not implemented');
  }
}

// Implementations
class MySQLDatabase extends Database {
  save(data) {
    console.log('Saving to MySQL:', data);
  }
}

class MongoDBDatabase extends Database {
  save(data) {
    console.log('Saving to MongoDB:', data);
  }
}

// High-level class depends on abstraction, not concrete class
class UserService {
  constructor(database) {
    this.database = database; // injected dependency
  }

  addUser(user) {
    this.database.save(user);
  }
}

// Usage
const mysql = new MySQLDatabase();
const mongo = new MongoDBDatabase();

const userService1 = new UserService(mysql);
userService1.addUser({ name: 'Alice' });

const userService2 = new UserService(mongo);
userService2.addUser({ name: 'Bob' });
// UserService doesn’t care which database it’s using.
// Just plug in a different implementation → no code changes needed.
// High-level and low-level both depend on the abstraction.
