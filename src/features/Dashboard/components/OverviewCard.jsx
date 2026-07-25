import { Link } from 'react-router-dom'

export default function OverviewCard({ card }) {
  return (
    <Link to={card.route} className="db-overview-card cs-card cs-card--hover">
      <span className="db-overview-card__dot" style={{ background: card.color }} />
      <h4>{card.title}</h4>
      <p className="db-overview-card__stat">{card.stat}</p>
      <p className="db-overview-card__sub">{card.sub}</p>
    </Link>
  )
}
