import { NavLink } from 'react-router-dom'
import { FiMenu, FiBell, FiCode } from 'react-icons/fi'
import './Navbar.css'
import { ROUTES } from '../../constants/routes'
import Button from '../Button'

const NAV_LINKS = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD },
  { label: 'Leaderboard', path: ROUTES.LEADERBOARD },
  { label: 'Friends', path: ROUTES.FRIENDS },
  { label: 'Challenges', path: ROUTES.CHALLENGES },
  { label: 'Manual Tracker', path: ROUTES.MANUAL_TRACKER },
  { label: 'Analytics', path: ROUTES.ANALYTICS },
  { label: 'Profile', path: ROUTES.PROFILE }
]

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="cs-navbar">
      <div className="cs-navbar__left">
        <button className="cs-navbar__menu-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <NavLink to={ROUTES.HOME} className="cs-navbar__logo">
          <FiCode className="cs-navbar__logo-icon" />
          <span>CodeSphere</span>
        </NavLink>
      </div>

      <nav className="cs-navbar__links">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `cs-navbar__link ${isActive ? 'cs-navbar__link--active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="cs-navbar__right">
        <button className="cs-navbar__icon-btn" aria-label="Notifications">
          <FiBell />
        </button>
        <NavLink to={ROUTES.LOGIN}>
          <Button variant="ghost" size="sm">Login</Button>
        </NavLink>
        <NavLink to={ROUTES.REGISTER}>
          <Button variant="primary" size="sm">Register</Button>
        </NavLink>
      </div>
    </header>
  )
}
