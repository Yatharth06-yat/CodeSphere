import ChallengeCard from './ChallengeCard'

export default function ChallengeSection({ title, challenges }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <h3 style={{ marginBottom: 14 }}>{title}</h3>
      <div className="cs-grid cs-grid--3">
        {challenges.map((c) => <ChallengeCard key={c.id} challenge={c} />)}
      </div>
    </div>
  )
}
