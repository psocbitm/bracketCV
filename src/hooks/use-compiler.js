'use client'
import { useState, useCallback } from 'react'
import { INITIAL_STRING } from '@/config/defaults'

export function useCompiler() {
  const [data, setData] = useState(() => {
    try {
      return JSON.parse(INITIAL_STRING)
    } catch (e) {
      return {}
    }
  })

  const [error, setError] = useState(null)

  const compile = useCallback((jsonString) => {
    try {
      const parsed = JSON.parse(jsonString)

      setData(parsed)
      setError(null)
      return true
    } catch (e) {
      console.warn('Compilation Failed:', e.message)
      setError(e)
      return false
    }
  }, [])

  return { data, error, compile }
}
