import { goalsAPI } from './goalsAPI'

/**
 * Goals service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const goalsService = {
  fetchGoalsData: async () => {
    const data = await goalsAPI.getAll()
    return data
  }
}
