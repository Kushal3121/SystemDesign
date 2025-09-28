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
