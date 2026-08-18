# Personal Portfolio (React)

A React port of my static portfolio site for the FSD assignment 2. This is the same site that was
built with pure HTML5 and CSS3 in the previous assignment (which lives in `blog-website/`), rebuilt
from scratch with functional components and react-router-dom so it behaves like a multi-page app
while remaining a single-page app internally. All content still comes from my current resume as of
03/08/2026.

## Setup

```bash
npm install
npm run dev
```

`npm run dev` starts the Vite dev server on localhost:5173. To produce a production build run
`npm run build`, which outputs to `dist/`. That's it, nothing else to configure.

## Design rationale

I kept the same dark space theme and just broke the one big page into routes: home, about, projects,
resume and contact. Each page lives in `src/pages` and is made of smaller reusable pieces in
`src/components`: Navbar, ProjectCard, Skills, ContactForm and so on. The projects list is data
now, stored as an array in `src/data/projects.js`, and `ProjectCard` knows nothing about specific
projects; it just receives a project object via props and renders it. `Projects` maps over the array
and hands each project to a `ProjectCard`, which in turn passes the tech stack down to `TagList`,
which is the prop drilling requirement (2 levels deep, technically 3 if you count App).

The theme toggle is the only state lifted all the way up to `App`, because both the toggle button in
the Navbar and the whole page styling need it. It's passed down as props (`theme` and `toggleTheme`)
and saved to localStorage so the choice survives a refresh. Everything else is scoped where it
belongs: the form state stays inside `ContactForm`, and each card's "view details" state stays
inside its own `ProjectCard`, which is what proves the state isn't shared between cards.

## useEffect hooks

There are three of them, and each one is actually doing something:

- `Home` runs a `setTimeout` on mount (empty `[]` dependency array) that fakes a ~1 second loading
  sequence before showing the hero, with `clearTimeout` in the cleanup so it doesn't leak.
- `App` writes the theme to localStorage in an effect that runs whenever the theme changes, and
  reads it back on initial load via a lazy `useState` initializer.
- `Navbar` adds a `window` resize listener to auto-close the mobile menu once the viewport grows
  past 768px, and removes it in the cleanup function.

## Known limitations

The contact form still doesn't submit anywhere, same as before. It just validates and shows a
thank-you message. That's for a future backend assignment. Also, since the assignment bans UI
libraries and global state managers, the component props get a bit verbose in places, but it's a
necessary tradeoff to meet the requirements.
