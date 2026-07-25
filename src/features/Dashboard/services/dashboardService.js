import { dashboardAPI } from './dashboardAPI'

/**
 * Dashboard service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const dashboardService = {
  fetchDashboardData: async () => {
    const data = await dashboardAPI.getAll()
    return data
  }
}
