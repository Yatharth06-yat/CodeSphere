export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="au-wrapper">
      <div className="cs-card au-card">
        <h2>{title}</h2>
        <p className="au-card__subtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  )
}
