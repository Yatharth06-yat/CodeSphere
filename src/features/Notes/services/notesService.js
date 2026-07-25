import { notesAPI } from './notesAPI'

/**
 * Notes service layer -- wraps the API layer with any feature-specific
 * business logic (sorting, filtering, shaping) so components and hooks stay
 * simple.
 */
export const notesService = {
  fetchNotesData: async () => {
    const data = await notesAPI.getAll()
    return data
  }
}
