import useMockData from '../../../shared/hooks/useMockData'
import { leetcodeService } from '../services/leetcodeService'

export default function useLeetCode() {
  const { data, loading, error } = useMockData(() => leetcodeService.fetchLeetCodeData(), [])
  return { leetcode: data, loading, error }
}
