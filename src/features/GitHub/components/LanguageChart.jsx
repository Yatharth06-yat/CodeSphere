import { PieChartCard } from '../../../shared/components/Charts'

export default function LanguageChart({ languages }) {
  return (
    <PieChartCard
      title="Top Languages"
      labels={languages.map((l) => l.name)}
      data={languages.map((l) => l.value)}
    />
  )
}
