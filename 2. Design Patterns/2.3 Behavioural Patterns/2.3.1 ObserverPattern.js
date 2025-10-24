// Imagine you subscribe to a YouTube channel.
//     - Whenever the channel uploads a new video, you get a notification.
//     - You don’t need to keep checking manually — the channel *notifies you automatically*.
//     - That’s the Observer Pattern!

// Technical Importance:
//     - Defines a one-to-many relationship between objects.
//     - When one object changes state (Subject), all its dependents (Observers) are notified.
//     - Used heavily in event-driven systems (GUIs, stock tickers, chat apps, etc.)

// Problem: NewsAgency directly controls all subscribers.
//     - If we add/remove a subscriber, we have to modify the agency code itself.
//     - Not scalable!
class NewsAgency {
  publish(news) {
    console.log('📰 News published:', news);

    // Manually notify each subscriber
    const user1 = new Subscriber('Alice');
    const user2 = new Subscriber('Bob');

    user1.receive(news);
    user2.receive(news);
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  receive(news) {
    console.log(`${this.name} received update: "${news}"`);
  }
}

// const agency = new NewsAgency();
agency.publish('New JavaScript version released!');

// Solution: Decouple the NewsAgency and Subscribers.
//     - Now subscribers can register/unregister dynamically.
class NewsAgency {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  notify(news) {
    this.subscribers.forEach((s) => s.update(news));
  }

  publish(news) {
    console.log('📰 News published:', news);
    this.notify(news);
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} received update: "${news}"`);
  }
}

const agency = new NewsAgency();
const user1 = new Subscriber('Alice');
const user2 = new Subscriber('Bob');

agency.subscribe(user1);
agency.subscribe(user2);

agency.publish('New JavaScript version released!');
// 📰 News published: New JavaScript version released!
// Alice received update: "New JavaScript version released!"
// Bob received update: "New JavaScript version released!"

// Now we can easily remove or add new subscribers dynamically
agency.unsubscribe(user2);
agency.publish('Observer Pattern Explained!');
// 📰 News published: Observer Pattern Explained!
// Alice received update: "Observer Pattern Explained!"
