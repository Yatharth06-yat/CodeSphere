import { timeAgo } from '../../../shared/utils/formatDate'

export default function RecentActivityList({ items }) {
  return (
    <div className="cs-card">
      <h4 style={{ marginBottom: 14 }}>Recent Activity</h4>
      <ul className="fr-feed">
        {items.map((item) => (
          <li key={item.id}>
            <span className="fr-feed__dot" />
            <div>
              <p>{item.text}</p>
              <small>{timeAgo(item.time)}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
