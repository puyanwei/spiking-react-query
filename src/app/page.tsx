"use client"

import { useTicTacToe } from "@/hooks/useBoardState"
import { useState, MouseEvent } from "react"

export type State = {
  player: 0 | 1 | null
  state: "O" | "X" | null
}

const players = ["John", "Peter"]

export default function Home() {
  const { data: boardState, refetchState, mutation, isLoading, error } = useTicTacToe()
  const [player, setPlayer] = useState(players[0])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {(error as Error).message}</div>
  if (!boardState) return null
  console.log({ boardState })
  function handleOnClick(e: MouseEvent<HTMLButtonElement>, index: number) {
    const isFirstPlayer = player === players[0]
    isFirstPlayer ? setPlayer(players[1]) : setPlayer(players[0])
    const newBoard: State[] = boardState.map((cell, i) => {
      if (i === index) return { player: isFirstPlayer ? 0 : 1, state: isFirstPlayer ? "X" : "O" }
      return cell
    })
    mutation.mutate(newBoard)
  }

  function isGameOver() {
    return boardState.every((cell) => cell.state !== null)
  }

  function isCellFilled(index: number) {
    return boardState[index].state !== null
  }

  const buttonStyles = "outline outline-1 outline-black h-40"

  return (
    <main className="min-h-screen w-[30rem] mx-auto">
      <h1 className="text-6xl text-center p-12">Tic Tac Toe</h1>
      <h2 className="py-4 text-xl">
        {`${player}'s turn`} {isGameOver() && <span> - Game Over</span>}
      </h2>

      <div className="grid grid-cols-3 border-black border-2 text-8xl">
        {boardState.map(({ state }, index) => (
          <button
            className={buttonStyles}
            key={index}
            onClick={(e) => handleOnClick(e, index)}
            disabled={isCellFilled(index)}
          >
            {state}
          </button>
        ))}
      </div>
    </main>
  )
}
