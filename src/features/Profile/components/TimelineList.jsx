import { formatDate } from '../../../shared/utils/formatDate'

export default function TimelineList({ timeline }) {
  return (
    <div className="cs-card">
      <h4 style={{ marginBottom: 14 }}>Timeline</h4>
      <ul className="pf-timeline">
        {timeline.map((item) => (
          <li key={item.id}>
            <span className="pf-timeline__dot" />
            <div>
              <p>{item.event}</p>
              <small>{formatDate(item.date)}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
