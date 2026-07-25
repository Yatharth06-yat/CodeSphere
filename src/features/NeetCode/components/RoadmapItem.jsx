import { percentage } from '../../../shared/utils/helpers'

export default function RoadmapItem({ item }) {
  const pct = percentage(item.completed, item.total)
  const done = pct === 100
  return (
    <div className="cs-card nc-roadmap-item">
      <div className="nc-roadmap-item__top">
        <h4>{item.category}</h4>
        <span className={`cs-badge ${done ? 'cs-badge--green' : 'cs-badge--blue'}`}>
          {item.completed}/{item.total}
        </span>
      </div>
      <div className="nc-roadmap-item__bar">
        <div className="nc-roadmap-item__bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
