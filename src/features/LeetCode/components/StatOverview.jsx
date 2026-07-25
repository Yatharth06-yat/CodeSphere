export default function StatOverview({ summary }) {
  const items = [
    { label: 'Solved', value: `${summary.totalSolved}/${summary.totalQuestions}` },
    { label: 'Contest Rating', value: summary.contestRating },
    { label: 'Global Rank', value: `#${summary.globalRank.toLocaleString()}` }
  ]
  return (
    <div className="cs-grid cs-grid--3">
      {items.map((item) => (
        <div key={item.label} className="cs-card lc-stat">
          <p className="lc-stat__value">{item.value}</p>
          <p className="lc-stat__label">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
