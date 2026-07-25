import { PieChartCard } from '../../../shared/components/Charts'

export default function DifficultyChart({ difficulty }) {
  return (
    <PieChartCard
      title="Solved by Difficulty"
      labels={['Easy', 'Medium', 'Hard']}
      data={[difficulty.easy, difficulty.medium, difficulty.hard]}
    />
  )
}
