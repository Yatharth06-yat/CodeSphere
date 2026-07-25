import { truncate } from '../../../shared/utils/helpers'
import { formatDate } from '../../../shared/utils/formatDate'

export default function NoteCard({ note }) {
  return (
    <div className="cs-card cs-card--hover nt-card">
      <div className="nt-card__top">
        <span className="cs-badge cs-badge--blue">{note.category}</span>
        <span className="nt-card__date">{formatDate(note.updatedAt)}</span>
      </div>
      <h4>{note.title}</h4>
      <p className="nt-card__content">{truncate(note.content, 100)}</p>
      <div className="nt-card__tags">
        {note.tags.map((tag) => <span key={tag} className="nt-card__tag">#{tag}</span>)}
      </div>
    </div>
  )
}
