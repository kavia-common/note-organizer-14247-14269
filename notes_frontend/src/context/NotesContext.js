import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * Shape:
 * note: { id, title, content, updatedAt }
 */

const NotesContext = createContext({
  notes: [],
  selectedId: null,
  // PUBLIC_INTERFACE
  search: '',
  setSearch: () => {},
  // PUBLIC_INTERFACE
  selectNote: (id) => {},
  // PUBLIC_INTERFACE
  createNote: () => {},
  // PUBLIC_INTERFACE
  updateNote: (id, patch) => {},
  // PUBLIC_INTERFACE
  deleteNote: (id) => {},
});

// PUBLIC_INTERFACE
export function NotesProvider({ children }) {
  /** Provides in-memory Notes state and CRUD operations. */
  const [notes, setNotes] = useState(() => {
    // seed with one example
    const now = new Date().toISOString();
    return [
      { id: uuidv4(), title: 'Welcome to Note Organizer', content: 'Start typing to edit this note.', updatedAt: now },
    ];
  });
  const [selectedId, setSelectedId] = useState(() => (notes[0]?.id || null));
  const [search, setSearch] = useState('');

  const selectNote = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const createNote = useCallback(() => {
    const newNote = {
      id: uuidv4(),
      title: 'Untitled note',
      content: '',
      updatedAt: new Date().toISOString(),
    };
    setNotes(prev => [newNote, ...prev]);
    setSelectedId(newNote.id);
  }, []);

  const updateNote = useCallback((id, patch) => {
    setNotes(prev => prev.map(n => (n.id === id ? { ...n, ...patch, updatedAt: new Date().toISOString() } : n)));
  }, []);

  const deleteNote = useCallback((id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
    setSelectedId(prevId => (prevId === id ? null : prevId));
  }, []);

  const value = useMemo(() => ({
    notes,
    selectedId,
    search,
    setSearch,
    selectNote,
    createNote,
    updateNote,
    deleteNote,
  }), [notes, selectedId, search, selectNote, createNote, updateNote, deleteNote]);

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

// PUBLIC_INTERFACE
export function useNotes() {
  /** Hook: Returns the notes context which includes notes list, selectedId, and CRUD/search functions. */
  return useContext(NotesContext);
}
