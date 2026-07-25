import useMockData from '../../../shared/hooks/useMockData'
import { githubService } from '../services/githubService'

export default function useGitHub() {
  const { data, loading, error } = useMockData(() => githubService.fetchGitHubData(), [])
  return { github: data, loading, error }
}
