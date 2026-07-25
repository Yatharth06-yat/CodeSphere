import useMockData from '../../../shared/hooks/useMockData'
import { neetcodeService } from '../services/neetcodeService'

export default function useNeetCode() {
  const { data, loading, error } = useMockData(() => neetcodeService.fetchNeetCodeData(), [])
  return { neetcode: data, loading, error }
}
