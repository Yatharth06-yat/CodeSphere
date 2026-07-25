import { neetcodeAPI } from './neetcodeAPI'

/**
 * NeetCode service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const neetcodeService = {
  fetchNeetCodeData: async () => {
    const data = await neetcodeAPI.getAll()
    return data
  }
}
