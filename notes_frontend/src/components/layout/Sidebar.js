import React, { useMemo } from 'react';
import { useNotes } from '../../context/NotesContext';
import { formatDate } from '../../utils/format';

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Sidebar showing a searchable list of notes and quick actions. */
  const { notes, selectedId, selectNote, createNote, search } = useNotes();

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter(n =>
      (n.title || '').toLowerCase().includes(q) ||
      (n.content || '').toLowerCase().includes(q)
    );
  }, [notes, search]);

  return (
    <aside className="sidebar">
      <div className="section">
        <strong>Notes</strong>
        <button className="btn ghost" onClick={createNote}>+ New</button>
      </div>
      <div className="note-list">
        {filtered.length === 0 && (
          <div className="card" style={{ padding: 12, color: 'var(--muted)' }}>
            No notes found.
          </div>
        )}
        {filtered.map((n) => (
          <button
            key={n.id}
            className={`note-list-item ${n.id === selectedId ? 'active' : ''}`}
            onClick={() => selectNote(n.id)}
            aria-label={`Open note ${n.title || 'Untitled note'}`}
          >
            <div style={{ minWidth: 0 }}>
              <div className="title">{n.title || 'Untitled'}</div>
              <div className="meta">Updated {formatDate(n.updatedAt)}</div>
            </div>
            <span className="badge">Note</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
