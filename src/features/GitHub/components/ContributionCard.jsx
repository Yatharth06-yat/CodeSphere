import { BarChartCard } from '../../../shared/components/Charts'

export default function ContributionCard({ contribution }) {
  return (
    <BarChartCard
      title="Contributions This Week"
      labels={contribution.labels}
      data={contribution.values}
    />
  )
}
