# Notes Frontend Architecture

This React application implements a modern, responsive Notes Organizer using in-memory state and a structure designed for straightforward backend integration later.

## Overview

- Theme: Ocean Professional (blue and amber accents, subtle gradients, rounded corners)
- Layout: Header (brand + search), Sidebar (notes list), Content (editor)
- State: In-memory via React Context
- Extensible: NotesContext isolates CRUD operations for future API wiring

## Structure

- src/
  - App.js: Root composition of ThemeProvider, NotesProvider, Layout, and Pages
  - theme.css: Global theme tokens and component styles
  - context/
    - ThemeContext.js: Light/Dark mode toggle
    - NotesContext.js: Notes state, selected Id, CRUD methods
  - components/
    - layout/
      - Header.js: Brand, search input, actions
      - Sidebar.js: Notes list with filtering and selection
      - Layout.js: Composes header + sidebar + content slot
    - notes/
      - NoteEditor.js: Editable title/content with actions
      - NoteViewer.js: Empty/placeholder view
  - pages/
    - NotesPage.js: Shows editor for selected note, else empty state
  - utils/
    - format.js: date formatting utility

## Future API Integration

Replace internals of NotesContext:
- Load notes from API in a useEffect
- Update createNote, updateNote, deleteNote to call API endpoints
- Optionally persist search in URL/query params

Keep the public interface stable:
- notes, selectedId, search, setSearch
- selectNote(id), createNote(), updateNote(id, patch), deleteNote(id)

## Scripts

- npm start
- npm run build
- npm test
