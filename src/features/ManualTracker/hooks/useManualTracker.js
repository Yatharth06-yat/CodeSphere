import { useState, useEffect, useCallback } from 'react'
import { manualTrackerService } from '../services/manualTrackerService'

let idCounter = 1000

export default function useManualTracker() {
  const [trackers, setTrackers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    manualTrackerService.fetchManualTrackerData().then((data) => {
      setTrackers(data)
      setLoading(false)
    })
  }, [])

  const createTracker = useCallback((tracker) => {
    setTrackers((prev) => [{ ...tracker, id: idCounter++, progress: tracker.progress || 0 }, ...prev])
  }, [])

  const updateTracker = useCallback((id, updates) => {
    setTrackers((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)))
  }, [])

  const deleteTracker = useCallback((id) => {
    setTrackers((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return { trackers, loading, createTracker, updateTracker, deleteTracker }
}
