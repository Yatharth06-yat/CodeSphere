import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import './Charts.css'
import { CHART_COLORS } from '../../constants/colors'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

export default function LineChartCard({ title, labels, data, color = CHART_COLORS.primary, height = 240 }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: color,
        backgroundColor: `${color}22`,
        fill: true,
        tension: 0.35,
        pointRadius: 3
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
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}
