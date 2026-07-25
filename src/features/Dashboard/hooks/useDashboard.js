import useMockData from '../../../shared/hooks/useMockData'
import { dashboardService } from '../services/dashboardService'

export default function useDashboard() {
  const { data, loading, error } = useMockData(() => dashboardService.fetchDashboardData(), [])
  return { dashboard: data, loading, error }
}
