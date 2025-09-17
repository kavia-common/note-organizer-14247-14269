import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useNotes } from '../../context/NotesContext';

// PUBLIC_INTERFACE
export default function Header() {
  /** Top application header with brand, search, and actions (theme toggle, new). */
  const { toggleTheme, theme } = useTheme();
  const { setSearch, createNote } = useNotes();

  return (
    <header className="header">
      <div className="brand">
        <div className="logo">N</div>
        <div>
          <div style={{ fontSize: 16 }}>Note Organizer</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Ocean Professional</div>
        </div>
      </div>

      <div className="search">
        <svg className="icon" viewBox="0 0 24 24" fill="none">
          <path d="M21 21l-4.35-4.35" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="11" cy="11" r="7" stroke="#6B7280" strokeWidth="1.6"/>
        </svg>
        <input
          placeholder="Search notes..."
          aria-label="Search notes"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="header-actions">
        <button className="btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <button className="btn primary" onClick={createNote}>
          + New Note
        </button>
      </div>
    </header>
  );
}
