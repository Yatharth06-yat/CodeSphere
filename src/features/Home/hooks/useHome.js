import useMockData from '../../../shared/hooks/useMockData'
import { homeService } from '../services/homeService'

export default function useHome() {
  const { data, loading, error } = useMockData(() => homeService.fetchHomeData(), [])
  return { home: data, loading, error }
}
