import { useState, useEffect } from 'react'
import useSettings from './hooks/useSettings'
import ToggleRow from './components/ToggleRow'
import Loader from '../../shared/components/Loader'
import Button from '../../shared/components/Button'
import './styles/Settings.css'

export default function Settings() {
  const { settings, loading } = useSettings()
  const [account, setAccount] = useState(null)
  const [notifications, setNotifications] = useState(null)
  const [privacy, setPrivacy] = useState(null)

  useEffect(() => {
    if (settings) {
      setAccount(settings.account)
      setNotifications(settings.notifications)
      setPrivacy(settings.privacy)
    }
  }, [settings])

  if (loading || !account) return <Loader fullPage label="Loading settings..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Settings</h1>
          <p className="cs-page__subtitle">Manage your account, notifications, and privacy</p>
        </div>
      </div>

      <div className="cs-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="cs-card">
          <h4 style={{ marginBottom: 14 }}>Account</h4>
          <div className="cs-form-group">
            <label>Full Name</label>
            <input value={account.name} onChange={(e) => setAccount({ ...account, name: e.target.value })} />
          </div>
          <div className="cs-form-group">
            <label>Email</label>
            <input value={account.email} onChange={(e) => setAccount({ ...account, email: e.target.value })} />
          </div>
          <div className="cs-form-group">
            <label>Username</label>
            <input value={account.username} onChange={(e) => setAccount({ ...account, username: e.target.value })} />
          </div>
          <Button variant="primary">Save Changes</Button>
        </div>

        <div>
          <div className="cs-card" style={{ marginBottom: 18 }}>
            <h4 style={{ marginBottom: 6 }}>Notifications</h4>
            <ToggleRow label="Email notifications" checked={notifications.email} onChange={(v) => setNotifications({ ...notifications, email: v })} />
            <ToggleRow label="Push notifications" checked={notifications.push} onChange={(v) => setNotifications({ ...notifications, push: v })} />
            <ToggleRow label="Weekly digest" checked={notifications.weeklyDigest} onChange={(v) => setNotifications({ ...notifications, weeklyDigest: v })} />
          </div>

          <div className="cs-card">
            <h4 style={{ marginBottom: 6 }}>Privacy</h4>
            <ToggleRow label="Public profile" checked={privacy.profilePublic} onChange={(v) => setPrivacy({ ...privacy, profilePublic: v })} />
            <ToggleRow label="Show on leaderboard" checked={privacy.showOnLeaderboard} onChange={(v) => setPrivacy({ ...privacy, showOnLeaderboard: v })} />
          </div>
        </div>
      </div>
    </div>
  )
}
