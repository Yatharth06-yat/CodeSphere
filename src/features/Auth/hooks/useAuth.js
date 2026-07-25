import { useState } from 'react'

/**
 * Placeholder auth hook. No real authentication is implemented in this
 * frontend-only build -- forms simply prevent default submission so the UI
 * can be wired up to a real auth service later.
 */
export default function useAuth() {
  const [submitting, setSubmitting] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 600)
  }

  return { submit, submitting }
}
