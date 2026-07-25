import { profileAPI } from './profileAPI'

/**
 * Profile service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const profileService = {
  fetchProfileData: async () => {
    const data = await profileAPI.getAll()
    return data
  }
}
