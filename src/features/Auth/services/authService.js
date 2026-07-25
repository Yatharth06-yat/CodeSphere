import { authAPI } from './authAPI'

/**
 * Auth service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const authService = {
  fetchAuthData: async () => {
    const data = await authAPI.getAll()
    return data
  }
}
