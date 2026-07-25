import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function QuickActions({ actions }) {
  return (
    <div className="cs-card">
      <h4 style={{ marginBottom: 14 }}>Quick Actions</h4>
      <div className="db-quick-actions">
        {actions.map((a) => (
          <Link key={a.id} to={a.route} className="db-quick-actions__item">
            <span>{a.label}</span>
            <FiArrowRight />
          </Link>
        ))}
      </div>
    </div>
  )
}
