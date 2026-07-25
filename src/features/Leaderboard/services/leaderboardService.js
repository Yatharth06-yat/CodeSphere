import { leaderboardAPI } from './leaderboardAPI'

/**
 * Leaderboard service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const leaderboardService = {
  fetchLeaderboardData: async () => {
    const data = await leaderboardAPI.getAll()
    return data
  }
}
