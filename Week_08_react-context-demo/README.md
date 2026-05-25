# Week 08 - React Context Demo

Overview
- This project demonstrates React Context usage across multiple components.
- It uses two context providers: `UserContextProvider` and `CounterContextProvider`.
- The UI is composed of three sibling components: `A`, `B`, and `C`.

Folder Tree
```text
Week_08_react-context-demo/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── App.css
│   ├── components/
│   │   ├── A.jsx
│   │   ├── B.jsx
│   │   └── C.jsx
│   ├── contexts/
│   │   ├── CounterContext.js
│   │   ├── CounterContextProvider.jsx
│   │   ├── UserContext.js
│   │   └── UserContextProvider.jsx
│   └── store/
│       └── TestStore.js
├── public/
├── package.json
└── README.md
```

Learning Goals
- Understand how to share state without prop drilling.
- See how multiple contexts can coexist in one app.
- Compare component-local structure with shared app-level state.

Contexts / Shared State
- `UserContext` and `UserContextProvider` manage user-related shared state.
- `CounterContext` and `CounterContextProvider` manage counter-related shared state.
- `TestStore.js` is an additional store/helper module used in the demo.

Project Structure Notes
- `src/main.jsx` wraps the app in both providers.
- `src/App.jsx` renders the `A`, `B`, and `C` components.
- `src/components/` contains the context consumer components.

Tech Stack
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

Deployment
- No Vercel deployment link is documented for this demo yet.
