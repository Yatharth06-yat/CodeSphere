import { analyticsAPI } from './analyticsAPI'

/**
 * Analytics service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const analyticsService = {
  fetchAnalyticsData: async () => {
    const data = await analyticsAPI.getAll()
    return data
  }
}
