// Imagine you’re using a File Explorer (like Windows Explorer or Finder).
// You can have:
//    - A single file (e.g. "notes.txt")
//    - A folder containing many files/folders
// You can perform the same action — like "open" or "delete" — on *both*
// That’s the Composite Pattern!

// Technical Importance:
// - Treats individual objects and groups of objects uniformly.
// - Useful for hierarchical structures like:
//     - Files/Folders
//     - UI Components (Button, Panel, Window)
//     - Organization hierarchies (Employee → Manager → Department)

// Problem:
// Client wants to perform common operations (like render or calculate size)
// But both "File" and "Folder" behave differently

// Without Composite Pattern
class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  getSize() {
    return this.size;
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  add(item) {
    this.children.push(item);
  }
  getSize() {
    // need to manually loop through
    return this.children.reduce((sum, child) => sum + child.getSize(), 0);
  }
}

// With Composite Pattern
// Step 1: Create a common interface (Component)
class FileSystemItem {
  getSize() {}
  display(indent = 0) {}
}

// Step 2: Leaf (File)
class FileLeaf extends FileSystemItem {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }
  getSize() {
    return this.size;
  }
  display(indent = 0) {
    console.log(`${' '.repeat(indent)}📄 ${this.name} (${this.size}KB)`);
  }
}

// Step 3: Composite (Folder)
class FolderComposite extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(item) {
    this.children.push(item);
  }

  getSize() {
    return this.children.reduce((sum, child) => sum + child.getSize(), 0);
  }

  display(indent = 0) {
    console.log(`${' '.repeat(indent)}📁 ${this.name}/`);
    this.children.forEach((child) => child.display(indent + 2));
  }
}

// Usage
const file1 = new FileLeaf('notes.txt', 10);
const file2 = new FileLeaf('resume.pdf', 50);
const subFolder = new FolderComposite('Projects');
const mainFolder = new FolderComposite('Documents');

subFolder.add(new FileLeaf('project1.zip', 200));
mainFolder.add(file1);
mainFolder.add(file2);
mainFolder.add(subFolder);

mainFolder.display();
console.log('Total Size:', mainFolder.getSize(), 'KB');

// Output:
// Documents/
//     notes.txt (10KB)
//     resume.pdf (50KB)
//     Projects/
//         project1.zip (200KB)
// Total Size: 260 KB

// When to Use Composite Pattern
//     - When you have tree-like structures (parts-whole hierarchy).
//     - When clients should treat single objects and groups the same way.
//     - Common use cases: file systems, menus, UI elements.

// In short:
//     - Composite = Treat individual objects and collections uniformly.
//     - Think “Folders contain files and folders — both behave the same.”
