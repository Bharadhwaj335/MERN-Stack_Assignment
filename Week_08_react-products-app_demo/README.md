# Week 08 - React Products App Demo

Overview
- This project is a React Router based product demo built with Vite.
- The app uses a root layout and multiple route-driven pages.

Folder Tree
```text
Week_08_react-products-app_demo/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── App.css
│   ├── components/
│   │   ├── RootLayout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── ProductList.jsx
│   │   ├── Product.jsx
│   │   └── ContactUs.jsx
│   └── assets/
├── public/
├── package.json
└── README.md
```

Learning Goals
- Configure nested routing with React Router.
- Reuse a common layout across multiple pages.
- Practice page-based navigation in a small React app.

Project Structure Notes
- `src/App.jsx` defines the router configuration.
- `src/components/RootLayout.jsx` is the shared wrapper for pages.
- `Header.jsx` and `Footer.jsx` create the common layout shell.
- `Home.jsx`, `ProductList.jsx`, `Product.jsx`, and `ContactUs.jsx` are the routed pages.

Routes
- `/` - home page
- `/productList` - product list page
- `/product` - product detail page
- `/contact` - contact page

Tech Stack
- React 19
- Vite
- React Router
- Tailwind CSS v4
- ESLint

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

Deployment
- No Vercel deployment link is documented for this demo yet.
