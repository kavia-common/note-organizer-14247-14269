import React, { useEffect, useState } from 'react';
import { useNotes } from '../../context/NotesContext';

// PUBLIC_INTERFACE
export default function NoteEditor({ note }) {
  /**
   * Editor for a single note. Provides Title and Content editing, with auto-update via context.
   */
  const { updateNote, deleteNote, createNote } = useNotes();
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  useEffect(() => {
    setTitle(note?.title || '');
    setContent(note?.content || '');
  }, [note?.id]); // reset when note changes

  const onTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    updateNote(note.id, { title: value });
  };

  const onContentChange = (e) => {
    const value = e.target.value;
    setContent(value);
    updateNote(note.id, { content: value });
  };

  return (
    <div className="editor card" style={{ padding: 16 }}>
      <div className="row">
        <input
          className="input"
          value={title}
          placeholder="Note title"
          onChange={onTitleChange}
          aria-label="Note title"
        />
        <div className="actions">
          <button className="btn" onClick={createNote}>Duplicate</button>
          <button
            className="btn"
            style={{ color: 'var(--color-error)', borderColor: 'rgba(239,68,68,0.35)' }}
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <textarea
        className="textarea"
        value={content}
        onChange={onContentChange}
        placeholder="Write your note here..."
        aria-label="Note content"
      />
    </div>
  );
}
