import useMockData from '../../../shared/hooks/useMockData'
import { goalsService } from '../services/goalsService'

export default function useGoals() {
  const { data, loading, error } = useMockData(() => goalsService.fetchGoalsData(), [])
  return { goals: data, loading, error }
}
