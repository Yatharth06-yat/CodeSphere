import { githubAPI } from './githubAPI'

/**
 * GitHub service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const githubService = {
  fetchGitHubData: async () => {
    const data = await githubAPI.getAll()
    return data
  }
}
