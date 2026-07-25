import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import './Charts.css'
import { CHART_COLORS } from '../../constants/colors'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChartCard({ title, labels, data, height = 240 }) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: CHART_COLORS.palette,
        borderWidth: 0
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 14, font: { size: 12 } } } }
  }
  return (
    <div className="cs-chart-card">
      {title && <h4 className="cs-chart-card__title">{title}</h4>}
      <div style={{ height }}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  )
}
