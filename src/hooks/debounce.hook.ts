import { useEffect, useState } from 'react'

// Custom debounce hook
export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler) // Cleanup timeout on value or delay change
  }, [value, delay])

  return debouncedValue
}
