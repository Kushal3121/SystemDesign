// Imagine you go to an IKEA store:
//     - If you want to furnish your living room, you buy a set → sofa + table + lamp.
//     - If you want to furnish your bedroom, you buy a set → bed + wardrobe + nightstand.
//     - You don’t mix them up — each factory produces a family of related products.
// Abstract Factory provides an interface to create families of related objects without specifying their concrete classes.

// Technical Importance:
//     - Used when you need to create groups of related objects that must work together.
//     - Good for cross-platform apps:
//         - Example: MacOS UI vs Windows UI → both have Button, Checkbox, Menu, but look different.

// Problem: Client code has OS-specific logic (if windows else if mac)
class WinButton {
  render() {
    console.log('Windows Button');
  }
}
class MacButton {
  render() {
    console.log('Mac Button');
  }
}

class WinCheckbox {
  render() {
    console.log('Windows Checkbox');
  }
}
class MacCheckbox {
  render() {
    console.log('Mac Checkbox');
  }
}

// Client code
function renderUI(osType) {
  let button, checkbox;
  if (osType === 'windows') {
    button = new WinButton();
    checkbox = new WinCheckbox();
  } else if (osType === 'mac') {
    button = new MacButton();
    checkbox = new MacCheckbox();
  }
  button.render();
  checkbox.render();
}

renderUI('windows');
renderUI('mac');

// Solution: Use Abstract Factory to encapsulate OS-specific logic
// Factories
class WinFactory {
  createButton() {
    return new WinButton();
  }
  createCheckbox() {
    return new WinCheckbox();
  }
}

class MacFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

// Client uses abstract factory
function renderUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

// Usage
renderUI(new WinFactory()); // Windows UI
renderUI(new MacFactory()); // Mac UI
