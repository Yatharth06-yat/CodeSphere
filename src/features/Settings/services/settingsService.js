import { settingsAPI } from './settingsAPI'

/**
 * Settings service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const settingsService = {
  fetchSettingsData: async () => {
    const data = await settingsAPI.getAll()
    return data
  }
}
