import useDashboard from './hooks/useDashboard'
import OverviewCard from './components/OverviewCard'
import RecentActivityList from './components/RecentActivityList'
import QuickActions from './components/QuickActions'
import { LineChartCard } from '../../shared/components/Charts'
import Loader from '../../shared/components/Loader'
import './styles/Dashboard.css'
import '../Friends/styles/Friends.css'

export default function Dashboard() {
  const { dashboard, loading } = useDashboard()

  if (loading || !dashboard) return <Loader fullPage label="Loading dashboard..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Dashboard</h1>
          <p className="cs-page__subtitle">A snapshot of everything you're tracking</p>
        </div>
      </div>

      <div className="cs-grid cs-grid--4">
        {dashboard.cards.map((card) => <OverviewCard key={card.id} card={card} />)}
      </div>

      <div className="cs-grid" style={{ gridTemplateColumns: '2fr 1fr', marginTop: 18 }}>
        <div className="cs-card">
          <LineChartCard
            title="Weekly Activity"
            labels={dashboard.weeklyActivity.labels}
            data={dashboard.weeklyActivity.values}
            height={260}
          />
        </div>
        <QuickActions actions={dashboard.quickActions} />
      </div>

      <div style={{ marginTop: 18 }}>
        <RecentActivityList items={dashboard.recentActivity} />
      </div>
    </div>
  )
}
