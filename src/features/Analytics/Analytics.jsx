import { useState } from 'react'
import useAnalytics from './hooks/useAnalytics'
import RangeTabs from './components/RangeTabs'
import SummaryStats from './components/SummaryStats'
import { LineChartCard, PieChartCard } from '../../shared/components/Charts'
import Loader from '../../shared/components/Loader'
import './styles/Analytics.css'
import '../Leaderboard/styles/Leaderboard.css'
import '../LeetCode/styles/LeetCode.css'

export default function Analytics() {
  const { analytics, loading } = useAnalytics()
  const [range, setRange] = useState('weekly')

  if (loading || !analytics) return <Loader fullPage label="Crunching your analytics..." />

  const rangeData = analytics[range]

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Analytics</h1>
          <p className="cs-page__subtitle">Deep dive into your study and coding patterns</p>
        </div>
      </div>

      <SummaryStats
        totalHours={analytics.totalHours}
        currentStreak={analytics.currentStreak}
        longestStreak={analytics.longestStreak}
      />

      <div style={{ margin: '22px 0 14px' }}>
        <RangeTabs active={range} onChange={setRange} />
      </div>

      <div className="cs-grid cs-grid--2">
        <div className="cs-card">
          <LineChartCard title="Activity Over Time" labels={rangeData.labels} data={rangeData.values} height={280} />
        </div>
        <div className="cs-card">
          <PieChartCard
            title="Time Split by Platform"
            labels={analytics.platformSplit.map((p) => p.name)}
            data={analytics.platformSplit.map((p) => p.value)}
            height={280}
          />
        </div>
      </div>
    </div>
  )
}
