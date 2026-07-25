import { friendsAPI } from './friendsAPI'

/**
 * Friends service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const friendsService = {
  fetchFriendsData: async () => {
    const data = await friendsAPI.getAll()
    return data
  }
}
