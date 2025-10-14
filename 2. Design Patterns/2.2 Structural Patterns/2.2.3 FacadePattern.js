// Imagine you just bought a new home theater system.
// You’ve got a projector, a sound system, a Blu-ray player, and smart lights.
// To watch a movie, you’d need to:
//     - Turn on the projector
//     - Set the input
//     - Turn on the sound system
//     - Insert the disc
//     - Dim the lights
// That’s a lot of steps every single time!

// So what do you do?
//     - You buy a universal remote that does *everything* when you press one button —
//     - That’s what the Facade Pattern does!
//     - It provides a simple interface to a complex subsystem.

// Technical Importance:
//     - Hides the complexity of multiple classes behind one unified interface.
//     - Makes systems easier to use for clients.
//     - Commonly used in large frameworks, SDKs, or APIs.

// Problem:
class Projector {
  on() {
    console.log('Projector ON');
  }
  setInput(source) {
    console.log(`Input set to ${source}`);
  }
}

class SoundSystem {
  on() {
    console.log('Sound System ON');
  }
  setVolume(level) {
    console.log(`Volume set to ${level}`);
  }
}

class BluRayPlayer {
  on() {
    console.log('Blu-ray Player ON');
  }
  play(movie) {
    console.log(`Playing movie: ${movie}`);
  }
}

class SmartLights {
  dim() {
    console.log('Lights dimmed');
  }
}

// Without Facade
function watchMovieWithoutFacade() {
  const projector = new Projector();
  const sound = new SoundSystem();
  const player = new BluRayPlayer();
  const lights = new SmartLights();

  projector.on();
  projector.setInput('HDMI');
  sound.on();
  sound.setVolume(10);
  player.on();
  player.play('Inception');
  lights.dim();
}

watchMovieWithoutFacade();

// With Facade
class HomeTheaterFacade {
  constructor() {
    this.projector = new Projector();
    this.sound = new SoundSystem();
    this.player = new BluRayPlayer();
    this.lights = new SmartLights();
  }

  watchMovie(movie) {
    console.log('Getting ready to watch a movie...');
    this.projector.on();
    this.projector.setInput('HDMI');
    this.sound.on();
    this.sound.setVolume(8);
    this.player.on();
    this.player.play(movie);
    this.lights.dim();
    console.log('Enjoy your movie!');
  }

  endMovie() {
    console.log('Shutting down the system...');
    console.log('Projector OFF, Sound OFF, Player OFF, Lights ON.');
  }
}

// Usage
const theater = new HomeTheaterFacade();
theater.watchMovie('Interstellar');
theater.endMovie();

// When to Use Facade
//     - When you have a complex system with many subsystems or APIs.
//     - When you want to simplify interaction for the client.
//     - Common in frameworks: e.g. Express.js, React DOM, or AWS SDK.

// In short:
//     - Facade = Simplifies complex systems with one clean entry point.
//     - Think of it as a “Universal Remote” for your system.
