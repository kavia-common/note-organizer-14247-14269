import React from 'react';
import './App.css';
import { NotesProvider } from './context/NotesContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import NotesPage from './pages/NotesPage';

// PUBLIC_INTERFACE
export default function App() {
  /** Root app: wraps providers and renders the notes page inside the main layout. */
  return (
    <ThemeProvider>
      <NotesProvider>
        <Layout>
          <NotesPage />
        </Layout>
      </NotesProvider>
    </ThemeProvider>
  );
}
