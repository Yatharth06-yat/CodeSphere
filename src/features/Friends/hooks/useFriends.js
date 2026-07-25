import useMockData from '../../../shared/hooks/useMockData'
import { friendsService } from '../services/friendsService'

export default function useFriends() {
  const { data, loading, error } = useMockData(() => friendsService.fetchFriendsData(), [])
  return { friendsData: data, loading, error }
}
