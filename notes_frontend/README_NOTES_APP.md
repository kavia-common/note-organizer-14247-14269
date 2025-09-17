# Notes Organizer Frontend (Ocean Professional)

A modern, responsive React app to create, view, edit, and delete notes. Uses in-memory state for now and is structured for easy future API integration.

## Run

- npm install
- npm start
- Open http://localhost:3000

## Features

- Sidebar navigation, Header with search and theme toggle
- In-memory CRUD with auto-save on edit
- Ocean Professional theme (blue and amber accents, subtle gradients)
- Responsive design for desktop and mobile

## Integrating a Backend Later

Replace methods inside `src/context/NotesContext.js` with API calls:
- createNote
- updateNote
- deleteNote
- initialize notes via a fetch in a `useEffect`

Keep the public interface unchanged.
