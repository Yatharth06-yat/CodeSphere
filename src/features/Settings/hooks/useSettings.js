import useMockData from '../../../shared/hooks/useMockData'
import { settingsService } from '../services/settingsService'

export default function useSettings() {
  const { data, loading, error } = useMockData(() => settingsService.fetchSettingsData(), [])
  return { settings: data, loading, error }
}
