import useProfile from './hooks/useProfile'
import ProfileHeader from './components/ProfileHeader'
import StatsRow from './components/StatsRow'
import AchievementBadge from './components/AchievementBadge'
import TimelineList from './components/TimelineList'
import Loader from '../../shared/components/Loader'
import './styles/Profile.css'
import '../LeetCode/styles/LeetCode.css'

export default function Profile() {
  const { profile, loading } = useProfile()

  if (loading || !profile) return <Loader fullPage label="Loading profile..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Profile</h1>
          <p className="cs-page__subtitle">Your public CodeSphere profile</p>
        </div>
      </div>

      <ProfileHeader profile={profile} />

      <div style={{ marginTop: 18 }}>
        <StatsRow stats={profile.stats} />
      </div>

      <div className="cs-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 18 }}>
        <div className="cs-card">
          <h4 style={{ marginBottom: 6 }}>Connected Platforms</h4>
          {profile.platforms.map((p) => (
            <div key={p.name} className="pf-platform-row">
              <span>{p.name}</span>
              <span className={`cs-badge cs-badge--${p.connected ? 'green' : 'gray'}`}>
                {p.connected ? p.handle : 'Not Connected'}
              </span>
            </div>
          ))}
        </div>
        <TimelineList timeline={profile.timeline} />
      </div>

      <h3 style={{ margin: '24px 0 14px' }}>Achievements</h3>
      <div className="cs-grid cs-grid--4">
        {profile.achievements.map((a) => <AchievementBadge key={a.id} achievement={a} />)}
      </div>
    </div>
  )
}
