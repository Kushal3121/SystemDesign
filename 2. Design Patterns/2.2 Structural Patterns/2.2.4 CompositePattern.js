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
