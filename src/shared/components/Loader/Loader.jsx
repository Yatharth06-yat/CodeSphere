import './Loader.css'

export default function Loader({ label = 'Loading...', fullPage = false }) {
  return (
    <div className={`cs-loader ${fullPage ? 'cs-loader--full' : ''}`}>
      <span className="cs-loader__spinner" />
      <span className="cs-loader__label">{label}</span>
    </div>
  )
}
