import { BarChartCard } from '../../../shared/components/Charts'

export default function ProgressChart({ roadmap }) {
  return (
    <BarChartCard
      title="Completed Topics by Category"
      labels={roadmap.map((r) => r.category)}
      data={roadmap.map((r) => r.completed)}
      height={300}
    />
  )
}
