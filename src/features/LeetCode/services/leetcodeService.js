import { leetcodeAPI } from './leetcodeAPI'

/**
 * LeetCode service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const leetcodeService = {
  fetchLeetCodeData: async () => {
    const data = await leetcodeAPI.getAll()
    return data
  }
}
