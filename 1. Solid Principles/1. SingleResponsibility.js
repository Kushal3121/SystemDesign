// Imagine you have a school bag.
//     - The bag's job is just to carry books.
//     - If you start asking the bag to cook lunch or teach you math, it's doing too many things.
//     - Soon, the bag gets messy, heavy, and useless.
// Rule: One thing should have only one job.

// A class/module/function should only have one reason to change.
// Think of it as:
//     - One class = One job = One reason to change.
//     - If you need to change something, it should only affect one class.

// Problem: User class does too many things (business, database, UI)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Business logic
  changeEmail(newEmail) {
    this.email = newEmail;
  }

  // Database logic
  saveToDatabase() {
    console.log(`Saving ${this.name} to the database...`);
  }

  // UI logic
  renderProfile() {
    console.log(`Rendering profile for ${this.name}`);
  }
}

// Solution: Split responsibilities into separate classes
// Class 1: Business logic
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// Class 2: Database logic
class UserRepository {
  save(user) {
    console.log(`Saving ${user.name} to the database...`);
  }
}

// Class 3: UI logic
class UserProfileRenderer {
  render(user) {
    console.log(`Rendering profile for ${user.name}`);
  }
}

// Usage
const user = new User('Alice', 'alice@example.com');
const repo = new UserRepository();
const renderer = new UserProfileRenderer();

user.changeEmail('alice@newmail.com');
repo.save(user);
renderer.render(user);
// Now each class has a single responsibility:
//     - User: handles user state
//     - UserRepository: saves to DB
//     - UserProfileRenderer: deals with UI
