import { Link } from 'react-router-dom'
import Button from '../../../shared/components/Button'
import { ROUTES } from '../../../shared/constants/routes'

export default function HeroSection() {
  return (
    <section className="hm-hero">
      <h1>Your coding journey, all in one place</h1>
      <p>
        CodeSphere brings together GitHub, LeetCode, NeetCode, and your own custom trackers
        into a single, clean dashboard — built for collaborative study and steady progress.
      </p>
      <div className="hm-hero__actions">
        <Link to={ROUTES.REGISTER}><Button variant="primary" size="lg">Get Started</Button></Link>
        <Link to={ROUTES.DASHBOARD}><Button variant="outline" size="lg">View Dashboard</Button></Link>
      </div>
    </section>
  )
}
