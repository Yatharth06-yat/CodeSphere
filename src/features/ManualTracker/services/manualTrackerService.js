import { manualTrackerAPI } from './manualTrackerAPI'

/**
 * ManualTracker service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const manualTrackerService = {
  fetchManualTrackerData: async () => {
    const data = await manualTrackerAPI.getAll()
    return data
  }
}
