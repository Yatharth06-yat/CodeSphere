import useHome from './hooks/useHome'
import HeroSection from './components/HeroSection'
import StatsStrip from './components/StatsStrip'
import FeatureGrid from './components/FeatureGrid'
import Loader from '../../shared/components/Loader'
import './styles/Home.css'

export default function Home() {
  const { home, loading } = useHome()

  if (loading || !home) return <Loader fullPage label="Loading CodeSphere..." />

  return (
    <div className="cs-page cs-fade-in">
      <HeroSection />
      <StatsStrip stats={home.stats} />
      <h3 style={{ margin: '30px 0 14px', textAlign: 'center' }}>Everything you need to stay consistent</h3>
      <FeatureGrid features={home.features} />
    </div>
  )
}
