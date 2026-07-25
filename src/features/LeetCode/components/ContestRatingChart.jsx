import { LineChartCard } from '../../../shared/components/Charts'

export default function ContestRatingChart({ weeklyProgress }) {
  return (
    <LineChartCard
      title="Problems Solved (Weekly)"
      labels={weeklyProgress.labels}
      data={weeklyProgress.values}
    />
  )
}
