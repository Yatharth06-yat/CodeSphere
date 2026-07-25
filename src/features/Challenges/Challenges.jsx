import useChallenges from './hooks/useChallenges'
import ChallengeSection from './components/ChallengeSection'
import Loader from '../../shared/components/Loader'
import './styles/Challenges.css'

export default function Challenges() {
  const { challenges, loading } = useChallenges()

  if (loading || !challenges) return <Loader fullPage label="Loading challenges..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Challenges</h1>
          <p className="cs-page__subtitle">Daily, weekly, and monthly challenges to keep you sharp</p>
        </div>
      </div>

      <ChallengeSection title="Daily" challenges={challenges.daily} />
      <ChallengeSection title="Weekly" challenges={challenges.weekly} />
      <ChallengeSection title="Monthly" challenges={challenges.monthly} />
    </div>
  )
}
