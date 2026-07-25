import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './shared/layouts'
import { ROUTES } from './shared/constants/routes'

import Home from './features/Home/Home.jsx'
import Dashboard from './features/Dashboard/Dashboard.jsx'
import { Login, Register } from './features/Auth'
import GitHub from './features/GitHub/GitHub.jsx'
import LeetCode from './features/LeetCode/LeetCode.jsx'
import NeetCode from './features/NeetCode/NeetCode.jsx'
import ManualTracker from './features/ManualTracker/ManualTracker.jsx'
import Friends from './features/Friends/Friends.jsx'
import Leaderboard from './features/Leaderboard/Leaderboard.jsx'
import Challenges from './features/Challenges/Challenges.jsx'
import Goals from './features/Goals/Goals.jsx'
import Notes from './features/Notes/Notes.jsx'
import Analytics from './features/Analytics/Analytics.jsx'
import Profile from './features/Profile/Profile.jsx'
import Settings from './features/Settings/Settings.jsx'

function NotFound() {
  return (
    <div className="cs-page" style={{ textAlign: 'center', paddingTop: 80 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>404</h1>
      <p style={{ color: '#64748b' }}>The page you're looking for doesn't exist.</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.GITHUB} element={<GitHub />} />
        <Route path={ROUTES.LEETCODE} element={<LeetCode />} />
        <Route path={ROUTES.NEETCODE} element={<NeetCode />} />
        <Route path={ROUTES.MANUAL_TRACKER} element={<ManualTracker />} />
        <Route path={ROUTES.FRIENDS} element={<Friends />} />
        <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
        <Route path={ROUTES.CHALLENGES} element={<Challenges />} />
        <Route path={ROUTES.GOALS} element={<Goals />} />
        <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
        <Route path={ROUTES.NOTES} element={<Notes />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
