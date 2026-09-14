# Personal Portfolio (React & Express)

A React port of my static portfolio site for FSD Assignment 2, updated for Assignment 3 with a dedicated Node.js/Express backend. Built using Vite, `react-router-dom`, and functional components. Content is based on my resume as of September 14th, 2026.

## Setup

### Frontend
```bash
npm install
npm run dev
```
Runs the Vite dev server on `http://localhost:5173`. Production build outputs to `dist/` via `npm run build`.

### Backend
```bash
cd server
npm install
npm run dev
```
Runs the Express server on `http://localhost:5000` (or your configured `PORT`).

## Architecture & Design

The site uses a dark space theme split across standard routes (`/`, `/about`, `/projects`, `/resume`, `/contact`).

- **Component Hierarchy:** Pages in `src/pages` pull from UI components in `src/components`.
- **State Scope:** Theme state is lifted to `App` so the Navbar toggle and body styling share it (saved to `localStorage`). Form inputs stay local to `ContactForm`, and card toggle states stay inside `ProjectCard`.
- **Prop Drilling:** Projects pass tech stacks down through `Projects` → `ProjectCard` → `TagList`.

## useEffect Hooks

- `Home`: Runs a ~1-second loading timer on mount (cleared on unmount).
- `App`: Syncs theme updates to `localStorage`.
- `Navbar`: Listens for `window` resize events to auto-close the mobile menu above 768px.

## Assignment 3 - Backend Integration

The project now also connects to a custom Express API in `/server` instead of relying on static mock data files or client-only logic.

### Endpoints (B1–B5)
- `GET /`: API health check (returns `{ "status": "ok" }`).
- `GET /api/projects`: Serves the list of projects.
- `GET /api/projects/:id`: Serves details for a single project (returns JSON 404 if invalid).
- `POST /api/contact`: Validates input (`name`, `email`, `message`) and saves submission (returns HTTP 400 on error, HTTP 201 on success).
- `GET /api/contact`: Retrieves all stored form submissions (*Note: Left intentionally unauthenticated for assignment evaluation*).

### Error Handling & Middleware (B6 & B7)
- **Centralized Error Handling (B6):** Undefined routes return a JSON `404` error payload. Internal server errors are caught by a global middleware handler to prevent raw HTML/stack trace leaks or server crashes.
- **CORS & Environment Setup (B7):** Cross-Origin Resource Sharing (CORS) is enabled to allow frontend requests from the Vite dev server. Environment variables (`PORT`, allowed origins) are loaded via `dotenv`, with `.env.example` provided as a template.

Videos for both assignment 2 and 3 are found in the GitHub Repository.