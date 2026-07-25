export default function AchievementBadge({ achievement }) {
  return (
    <div className="cs-card pf-achievement">
      <span className="pf-achievement__icon">{achievement.icon}</span>
      <p>{achievement.title}</p>
    </div>
  )
}
