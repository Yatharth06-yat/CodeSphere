import { timeAgo } from '../../../shared/utils/formatDate'

export default function ActivityFeed({ activity }) {
  return (
    <div className="cs-card">
      <h4 style={{ marginBottom: 14 }}>Friend Activity</h4>
      <ul className="fr-feed">
        {activity.map((a) => (
          <li key={a.id}>
            <span className="fr-feed__dot" />
            <div>
              <p><strong>{a.name}</strong> {a.action}</p>
              <small>{timeAgo(a.time)}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
