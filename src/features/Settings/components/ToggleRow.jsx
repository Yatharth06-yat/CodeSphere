export default function ToggleRow({ label, checked, onChange }) {
  return (
    <div className="st-toggle-row">
      <span>{label}</span>
      <label className="st-switch">
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <span className="st-switch__slider" />
      </label>
    </div>
  )
}
