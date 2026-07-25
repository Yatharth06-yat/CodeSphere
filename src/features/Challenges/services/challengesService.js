import { challengesAPI } from './challengesAPI'

/**
 * Challenges service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const challengesService = {
  fetchChallengesData: async () => {
    const data = await challengesAPI.getAll()
    return data
  }
}
