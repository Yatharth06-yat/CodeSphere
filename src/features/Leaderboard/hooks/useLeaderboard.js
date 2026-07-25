import useMockData from '../../../shared/hooks/useMockData'
import { leaderboardService } from '../services/leaderboardService'

export default function useLeaderboard() {
  const { data, loading, error } = useMockData(() => leaderboardService.fetchLeaderboardData(), [])
  return { leaderboard: data, loading, error }
}
