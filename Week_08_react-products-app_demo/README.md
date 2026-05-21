# Week 08 - React Products App Demo

Overview
- This project is a React Router based product demo built with Vite.
- The app uses a root layout and multiple route-driven pages.

Learning goals
- Configure nested routing with React Router.
- Reuse a common layout across multiple pages.
- Practice page-based navigation in a small React app.

Project structure
- `src/main.jsx` - React entry point.
- `src/App.jsx` - router configuration.
- `src/components/RootLayout.jsx` - shared page layout.
- `src/components/Header.jsx` - top navigation/header.
- `src/components/Footer.jsx` - footer section.
- `src/components/Home.jsx` - landing page.
- `src/components/ProductList.jsx` - product listing page.
- `src/components/Product.jsx` - single product page.
- `src/components/ContactUs.jsx` - contact page.

Tech stack
- React 19
- Vite
- React Router
- Tailwind CSS v4
- ESLint

Routes
- `/` - home page
- `/productList` - product list page
- `/product` - product detail page
- `/contact` - contact page

How to run

```bash
cd Week_08_react-products-app_demo
npm install
npm run dev
```

Available scripts
- `npm run dev` - start the Vite development server.
- `npm run build` - create a production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint.

Submission notes
- Mention how routing is configured in `App.jsx`.
- Include screenshots of each route and note how the shared layout is reused.
