import useGitHub from './hooks/useGitHub'
import ProfileCard from './components/ProfileCard'
import RepoCard from './components/RepoCard'
import LanguageChart from './components/LanguageChart'
import ContributionCard from './components/ContributionCard'
import Loader from '../../shared/components/Loader'
import './styles/GitHub.css'

export default function GitHub() {
  const { github, loading } = useGitHub()

  if (loading || !github) return <Loader fullPage label="Loading GitHub stats..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">GitHub</h1>
          <p className="cs-page__subtitle">Your connected GitHub profile and activity</p>
        </div>
      </div>

      <ProfileCard profile={github.profile} />

      <div className="cs-grid cs-grid--2" style={{ marginTop: 18 }}>
        <div className="cs-card"><LanguageChart languages={github.languages} /></div>
        <div className="cs-card"><ContributionCard contribution={github.contribution} /></div>
      </div>

      <h3 style={{ margin: '24px 0 14px' }}>Repositories</h3>
      <div className="cs-grid cs-grid--3">
        {github.repositories.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}
