# Week 08 - React Context Demo

Overview
- This project demonstrates React Context usage across multiple components.
- It uses two context providers: `UserContextProvider` and `CounterContextProvider`.
- The UI is composed of three sibling components: `A`, `B`, and `C`.

Learning goals
- Understand how to share state without prop drilling.
- See how multiple contexts can coexist in one app.
- Compare component-local structure with shared app-level state.

Project structure
- `src/main.jsx` - app entry point that wraps the app with both providers.
- `src/App.jsx` - root component.
- `src/components/A.jsx` - consumer component.
- `src/components/B.jsx` - consumer component.
- `src/components/C.jsx` - consumer component.
- `src/contexts/UserContextProvider.jsx` - user context provider.
- `src/contexts/CounterContextProvider.jsx` - counter context provider.
- `src/store/TestStore.js` - store/helper module used by the demo.

Tech stack
- React 19
- Vite
- Tailwind CSS v4
- Zustand
- ESLint

How to run

```bash
cd Week_08_react-context-demo
npm install
npm run dev
```

Available scripts
- `npm run dev` - start the Vite development server.
- `npm run build` - create a production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint.

Submission notes
- Explain how Context reduces prop drilling in this demo.
- If you update the providers, describe which state is shared and which components consume it.
