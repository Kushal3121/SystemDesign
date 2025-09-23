// Imagine your school principal:
//     - There is only one principal in the school.
//     - If students try to make another principal, the school won’t allow it.
//     - Everyone (teachers, students, parents) shares the same principal.
// Ensure only one instance of a class exists, and provide a global way to access it.

// Used when:
//     - You need one shared resource across the app.
//     - Example:
//         1. Logger → one log file for the whole system.
//         2. Configuration → one source of truth for settings.
//         3. Database connection → one connection pool manager.
//     - Benefits:
//         1. Controlled access (no duplicates).
//         2. Saves memory/resources.

// Problem: Multiple instances of Logger can be created
class Logger {
  log(message) {
    console.log(`[LOG] ${message}`);
  }
}

// const logger1 = new Logger();
// const logger2 = new Logger();

logger1.log('First message');
logger2.log('Second message');

console.log(logger1 === logger2); // false (two different objects)

// Solution: Singleton pattern ensures only one instance
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance; // return existing instance
    }
    Logger.instance = this;
  }

  log(message) {
    console.log(`[LOG] ${message}`);
  }
}

// Usage
const logger1 = new Logger();
const logger2 = new Logger();

logger1.log('First message');
logger2.log('Second message');

console.log(logger1 === logger2); // true (only one instance)

// In JavaScript, modules themselves are singletons by nature:
// logger.js
class Logger {
  log(message) {
    console.log(`[LOG] ${message}`);
  }
}
module.exports = new Logger(); // export ONE instance

// app.js
const logger1 = require('./logger');
const logger2 = require('./logger');

logger1.log('Hello');
logger2.log('World');

console.log(logger1 === logger2); // true
