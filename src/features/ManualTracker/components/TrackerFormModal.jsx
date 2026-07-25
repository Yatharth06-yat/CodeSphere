import { useState, useEffect } from 'react'
import Modal from '../../../shared/components/Modal'
import Button from '../../../shared/components/Button'

const EMPTY = { title: '', category: '', goal: '', notes: '', progress: 0, startDate: '', targetDate: '' }

export default function TrackerFormModal({ isOpen, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState(EMPTY)

  useEffect(() => {
    setForm(initialData ? { ...EMPTY, ...initialData } : EMPTY)
  }, [initialData, isOpen])

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = () => {
    if (!form.title.trim()) return
    onSubmit({ ...form, progress: Number(form.progress) || 0 })
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? 'Edit Tracker' : 'Create Tracker'}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>{initialData ? 'Save Changes' : 'Create Tracker'}</Button>
        </>
      }
    >
      <div className="cs-form-group">
        <label>Tracker Title</label>
        <input value={form.title} onChange={handleChange('title')} placeholder="e.g. JEE Preparation, Gym, Reading" />
      </div>
      <div className="cs-form-group">
        <label>Category</label>
        <input value={form.category} onChange={handleChange('category')} placeholder="e.g. Exam Prep, Fitness, Skill Building" />
      </div>
      <div className="cs-form-group">
        <label>Goal</label>
        <textarea rows={2} value={form.goal} onChange={handleChange('goal')} placeholder="What are you working toward?" />
      </div>
      <div className="cs-form-group">
        <label>Progress (%)</label>
        <input type="number" min="0" max="100" value={form.progress} onChange={handleChange('progress')} />
      </div>
      <div className="cs-form-group">
        <label>Notes</label>
        <textarea rows={2} value={form.notes} onChange={handleChange('notes')} placeholder="Optional notes" />
      </div>
      <div className="cs-form-group">
        <label>Start Date</label>
        <input type="date" value={form.startDate} onChange={handleChange('startDate')} />
      </div>
      <div className="cs-form-group">
        <label>Target Date</label>
        <input type="date" value={form.targetDate} onChange={handleChange('targetDate')} />
      </div>
    </Modal>
  )
}
