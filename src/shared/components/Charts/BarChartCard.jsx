import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
import './Charts.css'
import { CHART_COLORS } from '../../constants/colors'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function BarChartCard({ title, labels, data, color = CHART_COLORS.primary, height = 240 }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: color,
        borderRadius: 6,
        maxBarThickness: 28
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#f1f5f9' } }
    }
  }
  return (
    <div className="cs-chart-card">
      {title && <h4 className="cs-chart-card__title">{title}</h4>}
      <div style={{ height }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}
