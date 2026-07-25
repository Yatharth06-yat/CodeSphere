export default function StatsStrip({ stats }) {
  return (
    <div className="hm-stats">
      {stats.map((s) => (
        <div key={s.label} className="hm-stats__item">
          <p className="hm-stats__value">{s.value}</p>
          <p className="hm-stats__label">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
