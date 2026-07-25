import useMockData from '../../../shared/hooks/useMockData'
import { notesService } from '../services/notesService'

export default function useNotes() {
  const { data, loading, error } = useMockData(() => notesService.fetchNotesData(), [])
  return { notes: data, loading, error }
}
