import useLeetCode from './hooks/useLeetCode'
import StatOverview from './components/StatOverview'
import DifficultyChart from './components/DifficultyChart'
import ContestRatingChart from './components/ContestRatingChart'
import SubmissionTable from './components/SubmissionTable'
import Loader from '../../shared/components/Loader'
import './styles/LeetCode.css'

export default function LeetCode() {
  const { leetcode, loading } = useLeetCode()

  if (loading || !leetcode) return <Loader fullPage label="Loading LeetCode stats..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">LeetCode</h1>
          <p className="cs-page__subtitle">Track your problem solving and contest progress</p>
        </div>
      </div>

      <StatOverview summary={leetcode.summary} />

      <div className="cs-grid cs-grid--2" style={{ marginTop: 18 }}>
        <div className="cs-card"><DifficultyChart difficulty={leetcode.summary.difficulty} /></div>
        <div className="cs-card"><ContestRatingChart weeklyProgress={leetcode.weeklyProgress} /></div>
      </div>

      <h3 style={{ margin: '24px 0 14px' }}>Recent Submissions</h3>
      <SubmissionTable submissions={leetcode.recentSubmissions} />
    </div>
  )
}
