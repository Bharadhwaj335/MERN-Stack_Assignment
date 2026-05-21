# Week 02 — JavaScript: Dates, Modules, Collections, Copies

Summary
- This folder contains hands-on exercises and small projects focused on: working with Date objects, module patterns (CommonJS/ESM), collection data-engine examples, and shallow/deep copy concepts.

Prerequisites
- Node.js (v14+ recommended). Run `npm -v` and `node -v` to verify.

How to run
- From the workspace root (or inside this folder) run JavaScript files with:

```bash
node Week_02/<file>
``` 

Examples
- Run the Date hands-on scripts:
  - [Age_Calculator.js](Week_02/DateHandsOn/Age_Calculator.js#L1)
  - [Date_Comparison_Validation.js](Week_02/DateHandsOn/Date_Comparison_Validation.js#L1)
  - [Date_Creation_Extraction.js](Week_02/DateHandsOn/Date_Creation_Extraction.js#L1)

- Module demos:
  - Shopping cart demo: [Modules_Demo_Assignments/ShoppingCart/app.js](Week_02/Modules_Demo_Assignments/ShoppingCart/app.js#L1) (entry) — run `node Week_02/Modules_Demo_Assignments/ShoppingCart/app.js`.
  - ToDo app demo: [Modules_Demo_Assignments/ToDoApp/app.js](Week_02/Modules_Demo_Assignments/ToDoApp/app.js#L1) — run `node Week_02/Modules_Demo_Assignments/ToDoApp/app.js`.

- Master project on collections (Data Engine): small modules demonstrating collection processing:
  - [Course_Catalog.js](Week_02/Master_project_on_collections/Data%20Engine/Course_Catalog.js#L1)
  - [Engine.js](Week_02/Master_project_on_collections/Data%20Engine/Engine.js#L1)
  - [Role_Permission.js](Week_02/Master_project_on_collections/Data%20Engine/Role_Permission.js#L1)
  - [Shopping_Cart.js](Week_02/Master_project_on_collections/Data%20Engine/Shopping_Cart.js#L1)
  - [User_Processing.js](Week_02/Master_project_on_collections/Data%20Engine/User_Processing.js#L1)

- Shallow / Deep copy exercises:
  - [Shallow_copy_hands_on.js](Week_02/Shallow%20and%20DeepCopy/Shallow_copy_hands_on.js#L1)
  - [deep_copy_hands_on.js](Week_02/Shallow%20and%20DeepCopy/deep_copy_hands_on.js#L1)

Other files
- [class-demo_Assignment.js](Week_02/class-demo_Assignment.js#L1)

Notes & suggestions
- Provide small sample inputs in console or adapt the files to accept CLI args for automated checks.
- If a module uses `import`/`export` ensure Node runs with `type: module` or use `node --experimental-modules` for older Node versions.
