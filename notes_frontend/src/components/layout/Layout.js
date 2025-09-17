import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

// PUBLIC_INTERFACE
export default function Layout({ children }) {
  /** Main two-pane layout with sticky header, sidebar, and content area. */
  return (
    <div className="app-shell">
      <Header />
      <div className="main">
        <Sidebar />
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
}
