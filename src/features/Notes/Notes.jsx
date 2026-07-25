import { useState } from 'react'
import useNotes from './hooks/useNotes'
import NoteCard from './components/NoteCard'
import Loader from '../../shared/components/Loader'
import SearchBar from '../../shared/components/SearchBar'
import EmptyState from '../../shared/components/EmptyState'
import './styles/Notes.css'

export default function Notes() {
  const { notes, loading } = useNotes()
  const [query, setQuery] = useState('')

  if (loading || !notes) return <Loader fullPage label="Loading notes..." />

  const filtered = notes.filter((n) =>
    `${n.title} ${n.category} ${n.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Notes</h1>
          <p className="cs-page__subtitle">Your study notes, organized by category and tags</p>
        </div>
      </div>

      <div style={{ marginBottom: 18, maxWidth: 320 }}>
        <SearchBar value={query} onChange={setQuery} placeholder="Search notes..." />
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No notes found" message="Try a different search term." />
      ) : (
        <div className="cs-grid cs-grid--3">
          {filtered.map((note) => <NoteCard key={note.id} note={note} />)}
        </div>
      )}
    </div>
  )
}
