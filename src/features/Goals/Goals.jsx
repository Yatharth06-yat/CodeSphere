import useGoals from './hooks/useGoals'
import GoalCard from './components/GoalCard'
import Loader from '../../shared/components/Loader'
import './styles/Goals.css'

export default function Goals() {
  const { goals, loading } = useGoals()

  if (loading || !goals) return <Loader fullPage label="Loading goals..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Goals</h1>
          <p className="cs-page__subtitle">Track your long-term objectives across every platform</p>
        </div>
      </div>

      <div className="cs-grid cs-grid--3">
        {goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
      </div>
    </div>
  )
}
