import { Link } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import AuthCard from './components/AuthCard'
import Button from '../../shared/components/Button'
import { ROUTES } from '../../shared/constants/routes'
import './styles/Auth.css'

export default function Login() {
  const { submit, submitting } = useAuth()

  return (
    <AuthCard title="Welcome back" subtitle="Log in to continue tracking your progress">
      <form onSubmit={submit}>
        <div className="cs-form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />
        </div>
        <div className="cs-form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required />
        </div>
        <Button type="submit" variant="primary" fullWidth disabled={submitting}>
          {submitting ? 'Logging in...' : 'Log In'}
        </Button>
      </form>
      <p className="au-card__footer">
        Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
      </p>
    </AuthCard>
  )
}
