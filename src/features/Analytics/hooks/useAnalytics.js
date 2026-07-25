import useMockData from '../../../shared/hooks/useMockData'
import { analyticsService } from '../services/analyticsService'

export default function useAnalytics() {
  const { data, loading, error } = useMockData(() => analyticsService.fetchAnalyticsData(), [])
  return { analytics: data, loading, error }
}
