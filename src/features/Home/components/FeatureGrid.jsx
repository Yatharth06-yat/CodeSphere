export default function FeatureGrid({ features }) {
  return (
    <div className="cs-grid cs-grid--4">
      {features.map((f) => (
        <div key={f.title} className="cs-card cs-card--hover">
          <h4 style={{ marginBottom: 8, fontSize: 15 }}>{f.title}</h4>
          <p style={{ fontSize: 13, color: '#64748b' }}>{f.description}</p>
        </div>
      ))}
    </div>
  )
}
