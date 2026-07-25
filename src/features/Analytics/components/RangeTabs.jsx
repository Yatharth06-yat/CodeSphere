import { classNames } from '../../../shared/utils/helpers'

const TABS = [
  { key: 'weekly', label: 'Weekly' },
  { key: 'monthly', label: 'Monthly' },
  { key: 'yearly', label: 'Yearly' }
]

export default function RangeTabs({ active, onChange }) {
  return (
    <div className="lb-tabs">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          className={classNames('lb-tabs__btn', active === tab.key && 'lb-tabs__btn--active')}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
