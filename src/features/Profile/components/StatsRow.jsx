export default function StatsRow({ stats }) {
  const items = [
    { label: 'Problems Solved', value: stats.problemsSolved },
    { label: 'Repositories', value: stats.repos },
    { label: 'Day Streak', value: stats.streak },
    { label: 'Total Points', value: stats.points.toLocaleString() }
  ]
  return (
    <div className="cs-grid cs-grid--4">
      {items.map((item) => (
        <div key={item.label} className="cs-card lc-stat">
          <p className="lc-stat__value">{item.value}</p>
          <p className="lc-stat__label">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
