import useMockData from '../../../shared/hooks/useMockData'
import { challengesService } from '../services/challengesService'

export default function useChallenges() {
  const { data, loading, error } = useMockData(() => challengesService.fetchChallengesData(), [])
  return { challenges: data, loading, error }
}
