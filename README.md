# PLP Task Manager

A simple yet powerful task manager built with **React**, **Tailwind CSS**, and **Vite**.  
This app includes dark mode support, task filtering, localStorage persistence, and live data from a public API.

---

## Project Objectives

- Build reusable React components (Card, Button, Layout)
- Manage tasks with `useState`, `useEffect`, and localStorage
- Implement client-side routing with React Router
- Fetch and display external API data with loading & error handling
- Add pagination and search to API data
- Enable dark/light mode using `useContext` and Tailwind's `dark:` classes

---

## Live Features

- ✅ Add / complete / delete tasks
- ✅ Filter tasks: All, Active, Completed
- ✅ Persist tasks in localStorage
- ✅ View JSONPlaceholder posts
- ✅ Pagination (3 posts per page)
- ✅ Real-time search for API posts
- ✅ Dark / light theme toggle

---

## Tech Stack

- **React** with functional components and hooks
- **Vite** for lightning-fast dev server and bundling
- **Tailwind CSS v3** for styling (with dark mode support)
- **PostCSS + Autoprefixer**
- **React Router DOM** for routing

---

## Folder Structure

src/
│
├── components/
│ ├── Button.jsx
│ ├── Card.jsx
│ ├── Footer.jsx
│ ├── Layout.jsx
│ ├── Navbar.jsx
│ └── TaskManager.jsx
│
├── context/
│ └── ThemeContext.jsx
│
├── pages/
│ └── ApiPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
---
## Link
- https://plptaskmanager.netlify.app/
