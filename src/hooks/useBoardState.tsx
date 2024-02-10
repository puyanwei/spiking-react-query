import { useMutation, useQuery } from "@tanstack/react-query"

export function useTicTacToe() {
  const {
    data,
    refetch: refetchState,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["state"],
    queryFn: () => fetch("api").then((res) => res.json()),
  })

  const mutation = useMutation({
    mutationFn: (newState) => {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newState),
      }
      return fetch("/api", options)
    },
  })

  return { data, refetchState, mutation, isLoading, error }
}
