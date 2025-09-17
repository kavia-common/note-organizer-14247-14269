import React from 'react';

// PUBLIC_INTERFACE
export default function NoteViewer({ message = 'Select or create a note to get started.' }) {
  /** Simple empty state/placeholder viewer. */
  return (
    <div className="empty">
      <div className="bubble">
        <div style={{ fontSize: 18, marginBottom: 8 }}>No note selected</div>
        <div style={{ color: 'var(--muted)' }}>{message}</div>
      </div>
    </div>
  );
}
