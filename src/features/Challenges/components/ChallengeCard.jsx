import { FiAward } from 'react-icons/fi'

const statusBadge = { Completed: 'green', 'In Progress': 'amber', 'Not Started': 'gray' }
const difficultyBadge = { Easy: 'green', Medium: 'amber', Hard: 'red' }

export default function ChallengeCard({ challenge }) {
  return (
    <div className="cs-card cs-card--hover ch-card">
      <div className="ch-card__top">
        <span className={`cs-badge cs-badge--${difficultyBadge[challenge.difficulty]}`}>{challenge.difficulty}</span>
        <span className="ch-card__points"><FiAward /> {challenge.points} pts</span>
      </div>
      <h4>{challenge.title}</h4>
      <span className={`cs-badge cs-badge--${statusBadge[challenge.status]}`}>{challenge.status}</span>
    </div>
  )
}
