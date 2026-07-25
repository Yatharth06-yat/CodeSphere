import useNeetCode from './hooks/useNeetCode'
import RoadmapItem from './components/RoadmapItem'
import ProgressChart from './components/ProgressChart'
import Loader from '../../shared/components/Loader'
import './styles/NeetCode.css'

export default function NeetCode() {
  const { neetcode, loading } = useNeetCode()

  if (loading || !neetcode) return <Loader fullPage label="Loading NeetCode roadmap..." />

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">NeetCode Roadmap</h1>
          <p className="cs-page__subtitle">Overall progress: {neetcode.overallProgress}%</p>
        </div>
      </div>

      <div className="cs-card" style={{ marginBottom: 18 }}>
        <ProgressChart roadmap={neetcode.roadmap} />
      </div>

      <div className="cs-grid cs-grid--3">
        {neetcode.roadmap.map((item) => (
          <RoadmapItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
