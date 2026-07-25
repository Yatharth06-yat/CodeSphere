import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import useManualTracker from './hooks/useManualTracker'
import TrackerCard from './components/TrackerCard'
import TrackerFormModal from './components/TrackerFormModal'
import Button from '../../shared/components/Button'
import Loader from '../../shared/components/Loader'
import EmptyState from '../../shared/components/EmptyState'
import SearchBar from '../../shared/components/SearchBar'
import './styles/ManualTracker.css'

export default function ManualTracker() {
  const { trackers, loading, createTracker, updateTracker, deleteTracker } = useManualTracker()
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [query, setQuery] = useState('')

  const filtered = trackers.filter((t) =>
    `${t.title} ${t.category}`.toLowerCase().includes(query.toLowerCase())
  )

  const openCreate = () => { setEditing(null); setModalOpen(true) }
  const openEdit = (tracker) => { setEditing(tracker); setModalOpen(true) }

  const handleSubmit = (data) => {
    if (editing) updateTracker(editing.id, data)
    else createTracker(data)
  }

  if (loading) return <Loader fullPage label="Loading trackers..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Manual Tracker</h1>
          <p className="cs-page__subtitle">Create a tracker for any goal — JEE, GATE, gym, reading, ML, and more</p>
        </div>
        <Button variant="primary" icon={FiPlus} onClick={openCreate}>New Tracker</Button>
      </div>

      <div style={{ marginBottom: 18, maxWidth: 320 }}>
        <SearchBar value={query} onChange={setQuery} placeholder="Search trackers..." />
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No trackers yet"
          message="Create your first tracker for any goal — exam prep, fitness, skill building, or a personal habit."
          actionLabel="Create Tracker"
          onAction={openCreate}
        />
      ) : (
        <div className="cs-grid cs-grid--3">
          {filtered.map((tracker) => (
            <TrackerCard key={tracker.id} tracker={tracker} onEdit={openEdit} onDelete={deleteTracker} />
          ))}
        </div>
      )}

      <TrackerFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editing}
      />
    </div>
  )
}
