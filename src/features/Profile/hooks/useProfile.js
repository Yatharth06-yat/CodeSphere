import useMockData from '../../../shared/hooks/useMockData'
import { profileService } from '../services/profileService'

export default function useProfile() {
  const { data, loading, error } = useMockData(() => profileService.fetchProfileData(), [])
  return { profile: data, loading, error }
}
