import { NavLink } from 'react-router-dom'
import {
  FiGrid, FiGithub, FiCode, FiCompass, FiClipboard, FiUsers,
  FiAward, FiFlag, FiTarget, FiFileText, FiBarChart2, FiUser, FiSettings
} from 'react-icons/fi'
import './Sidebar.css'
import { ROUTES } from '../../constants/routes'

const SECTIONS = [
  {
    title: 'Overview',
    items: [{ label: 'Dashboard', path: ROUTES.DASHBOARD, icon: FiGrid }]
  },
  {
    title: 'Platforms',
    items: [
      { label: 'GitHub', path: ROUTES.GITHUB, icon: FiGithub },
      { label: 'LeetCode', path: ROUTES.LEETCODE, icon: FiCode },
      { label: 'NeetCode', path: ROUTES.NEETCODE, icon: FiCompass },
      { label: 'Manual Tracker', path: ROUTES.MANUAL_TRACKER, icon: FiClipboard }
    ]
  },
  {
    title: 'Community',
    items: [
      { label: 'Friends', path: ROUTES.FRIENDS, icon: FiUsers },
      { label: 'Leaderboard', path: ROUTES.LEADERBOARD, icon: FiAward },
      { label: 'Challenges', path: ROUTES.CHALLENGES, icon: FiFlag }
    ]
  },
  {
    title: 'Productivity',
    items: [
      { label: 'Goals', path: ROUTES.GOALS, icon: FiTarget },
      { label: 'Notes', path: ROUTES.NOTES, icon: FiFileText },
      { label: 'Analytics', path: ROUTES.ANALYTICS, icon: FiBarChart2 }
    ]
  },
  {
    title: 'Account',
    items: [
      { label: 'Profile', path: ROUTES.PROFILE, icon: FiUser },
      { label: 'Settings', path: ROUTES.SETTINGS, icon: FiSettings }
    ]
  }
]

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`cs-sidebar ${isOpen ? 'cs-sidebar--open' : ''}`}>
      {SECTIONS.map((section) => (
        <div key={section.title} className="cs-sidebar__section">
          <p className="cs-sidebar__section-title">{section.title}</p>
          {section.items.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `cs-sidebar__link ${isActive ? 'cs-sidebar__link--active' : ''}`}
            >
              <Icon className="cs-sidebar__icon" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}
