import './EmptyState.css'
import Button from '../Button'

export default function EmptyState({ icon: Icon, title = 'Nothing here yet', message = '', actionLabel, onAction }) {
  return (
    <div className="cs-empty">
      {Icon && <Icon className="cs-empty__icon" />}
      <h3 className="cs-empty__title">{title}</h3>
      {message && <p className="cs-empty__message">{message}</p>}
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  )
}
