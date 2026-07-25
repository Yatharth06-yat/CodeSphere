import { useState } from 'react'
import useLeaderboard from './hooks/useLeaderboard'
import TopThree from './components/TopThree'
import RankTable from './components/RankTable'
import FilterTabs from './components/FilterTabs'
import Loader from '../../shared/components/Loader'
import './styles/Leaderboard.css'

export default function Leaderboard() {
  const { leaderboard, loading } = useLeaderboard()
  const [active, setActive] = useState('weekly')

  if (loading || !leaderboard) return <Loader fullPage label="Loading leaderboard..." />

  const users = leaderboard[active]

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Leaderboard</h1>
          <p className="cs-page__subtitle">See how you rank against the community</p>
        </div>
      </div>

      <FilterTabs active={active} onChange={setActive} />

      {users.length >= 3 && <TopThree users={users.slice(0, 3)} />}

      <div className="cs-card">
        <RankTable users={users} />
      </div>
    </div>
  )
}
