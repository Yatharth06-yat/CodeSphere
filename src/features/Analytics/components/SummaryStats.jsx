export default function SummaryStats({ totalHours, currentStreak, longestStreak }) {
  const items = [
    { label: 'Total Hours', value: totalHours },
    { label: 'Current Streak', value: `${currentStreak} days` },
    { label: 'Longest Streak', value: `${longestStreak} days` }
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
