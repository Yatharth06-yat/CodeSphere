import { FiEdit2, FiTrash2, FiCalendar } from 'react-icons/fi'
import { formatDate } from '../../../shared/utils/formatDate'

export default function TrackerCard({ tracker, onEdit, onDelete }) {
  return (
    <div className="cs-card cs-card--hover mt-card">
      <div className="mt-card__top">
        <span className="cs-badge cs-badge--blue">{tracker.category}</span>
        <div className="mt-card__actions">
          <button onClick={() => onEdit(tracker)} aria-label="Edit"><FiEdit2 /></button>
          <button onClick={() => onDelete(tracker.id)} aria-label="Delete"><FiTrash2 /></button>
        </div>
      </div>
      <h4>{tracker.title}</h4>
      <p className="mt-card__goal">{tracker.goal}</p>

      <div className="mt-card__bar">
        <div className="mt-card__bar-fill" style={{ width: `${tracker.progress}%` }} />
      </div>
      <p className="mt-card__progress-label">{tracker.progress}% complete</p>

      {tracker.notes && <p className="mt-card__notes">"{tracker.notes}"</p>}

      <div className="mt-card__dates">
        <FiCalendar />
        <span>{formatDate(tracker.startDate)} → {formatDate(tracker.targetDate)}</span>
      </div>
    </div>
  )
}
