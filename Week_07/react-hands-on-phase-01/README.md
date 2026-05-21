# Week 07 - React Hands-On Phase 01

Overview
- This phase is a small Vite + React practice app focused on component composition and simple product rendering.
- The app renders two components from `src/components`: `Product.jsx` and `Products.jsx`.

Project structure
- `src/main.jsx` - React entry point.
- `src/App.jsx` - root component that mounts the phase UI.
- `src/components/Product.jsx` - individual product card / item component.
- `src/components/Products.jsx` - parent component that likely renders a product collection.

Tech stack
- React 19
- Vite
- Tailwind CSS v4
- ESLint

How to run

```bash
cd Week_07/react-hands-on-phase-01
npm install
npm run dev
```

Available scripts
- `npm run dev` - start the Vite development server.
- `npm run build` - create a production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint.

Submission notes
- Mention the component hierarchy in your report.
- Add screenshots of the rendered product UI and briefly explain how data flows from parent to child components.
