# Week 08 - User Management Frontend

Overview
- This is the React frontend for the user management fullstack app.
- It is built with Vite and React and is intended to work with the backend API in the sibling `Backend` folder.

Folder Tree
```text
Frontend/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── components/
│   │   ├── RootLayout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── AddUser.jsx
│   │   ├── UserList.jsx
│   │   └── User.jsx
│   └── assets/
├── public/
├── package.json
└── README.md
```

Learning Goals
- Build a frontend shell for user management features.
- Separate UI concerns from API and database logic.
- Prepare the frontend for later API integration and deployment.

Project Structure Notes
- `src/App.jsx` configures the routes.
- `RootLayout.jsx` provides the shared layout.
- `Home.jsx`, `AddUser.jsx`, `UserList.jsx`, and `User.jsx` are the main routed views.

Route Map
- `/` - home page
- `/add-user` - add user form
- `/users-list` - list of users
- `/user` - single user page

Tech Stack
- React 19
- Vite
- Tailwind CSS v4
- ESLint

How to run

```bash
cd Week_08_user-management-app/Frontend
npm install
npm run dev
```

Available scripts
- `npm run dev` - start the Vite development server.
- `npm run build` - create a production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint.

Deployment
- Set `VITE_API_BASE_URL` to the deployed backend URL before building for production.
- The included `vercel.json` rewrite keeps React Router routes working on refresh.
- Add the deployed frontend URL here once the app is published.

Submission notes
- Mention how the frontend communicates with the backend API.
- Include screenshots of the user-management screens and describe the main user flows.
