import axiosInstance from '../../../shared/services/axiosInstance'
import { githubMockData } from '../data/githubMockData'

/**
 * GitHub API layer.
 * Currently resolves with local mock data so the UI has something real to
 * render. Replace the body of each function with the matching axiosInstance
 * call once the backend is available -- the function signatures are already
 * shaped for that swap.
 */
export const githubAPI = {
  getAll: async () => {
    // return axiosInstance.get('/github').then((res) => res.data)
    return Promise.resolve(githubMockData)
  }
}
