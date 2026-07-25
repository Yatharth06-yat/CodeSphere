import { FiFlag } from 'react-icons/fi'
import { formatDate } from '../../../shared/utils/formatDate'

export default function GoalCard({ goal }) {
  return (
    <div className="cs-card go-card">
      <div className="go-card__top">
        <span className="cs-badge cs-badge--blue">{goal.category}</span>
        <span className="go-card__deadline"><FiFlag /> {formatDate(goal.deadline)}</span>
      </div>
      <h4>{goal.title}</h4>
      <div className="go-card__bar">
        <div className="go-card__bar-fill" style={{ width: `${goal.progress}%` }} />
      </div>
      <p className="go-card__pct">{goal.progress}%</p>
    </div>
  )
}
