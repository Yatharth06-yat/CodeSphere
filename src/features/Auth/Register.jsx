import { Link } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import AuthCard from './components/AuthCard'
import Button from '../../shared/components/Button'
import { ROUTES } from '../../shared/constants/routes'
import './styles/Auth.css'

export default function Register() {
  const { submit, submitting } = useAuth()

  return (
    <AuthCard title="Create your account" subtitle="Join CodeSphere and start tracking your growth">
      <form onSubmit={submit}>
        <div className="cs-form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Your name" required />
        </div>
        <div className="cs-form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />
        </div>
        <div className="cs-form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required />
        </div>
        <Button type="submit" variant="primary" fullWidth disabled={submitting}>
          {submitting ? 'Creating account...' : 'Register'}
        </Button>
      </form>
      <p className="au-card__footer">
        Already have an account? <Link to={ROUTES.LOGIN}>Log in</Link>
      </p>
    </AuthCard>
  )
}
