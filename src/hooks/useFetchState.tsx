import { useEffect, useState } from "react"

export function useFetchState() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const resolvedData = await response.json()
        setData(resolvedData)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
