import axiosInstance from '../../../shared/services/axiosInstance'
import { notesMockData } from '../data/notesMockData'

/**
 * Notes API layer.
 * Currently resolves with local mock data so the UI has something real to
 * render. Replace the body of each function with the matching axiosInstance
 * call once the backend is available -- the function signatures are already
 * shaped for that swap.
 */
export const notesAPI = {
  getAll: async () => {
    // return axiosInstance.get('/notes').then((res) => res.data)
    return Promise.resolve(notesMockData)
  }
}
