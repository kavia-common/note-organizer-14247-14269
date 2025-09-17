import React, { useMemo } from 'react';
import { useNotes } from '../context/NotesContext';
import NoteEditor from '../components/notes/NoteEditor';
import NoteViewer from '../components/notes/NoteViewer';

// PUBLIC_INTERFACE
export default function NotesPage() {
  /** The main page for Notes: shows editor for the selected note or an empty prompt. */
  const { notes, selectedId } = useNotes();
  const selected = useMemo(() => notes.find(n => n.id === selectedId) || null, [notes, selectedId]);

  if (!selected) {
    return <NoteViewer />;
  }
  return <NoteEditor note={selected} />;
}
