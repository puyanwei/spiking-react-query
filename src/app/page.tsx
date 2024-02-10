"use client"

import { useState, MouseEvent } from "react"

type State = {
  player: 0 | 1 | null
  state: "O" | "X" | null
}

const players = ["John", "Peter"]
const state = Array(9).fill({ player: null, state: null })
const playerSymbolMap: Record<number, string> = {
  0: "X",
  1: "O",
}

export default function Home() {
  const [player, setPlayer] = useState(players[0])
  const [boardState, setBoardState] = useState<State[]>(state)

  const buttonStyles = "outline outline-1 outline-black h-40"

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    const isFirstPlayer = player === players[0]
    isFirstPlayer ? setPlayer(players[1]) : setPlayer(players[0])
    const newBoard: State[] = boardState.map((cell, i) => {
      if (i === index) return { player: isFirstPlayer ? 0 : 1, state: isFirstPlayer ? "X" : "O" }
      return cell
    })
    setBoardState(newBoard)
  }

  return (
    <main className="min-h-screen w-[30rem] mx-auto">
      <h1 className="text-6xl text-center p-12">Tic Tac Toe</h1>
      <h2 className="py-4 text-xl">{`${player}'s turn`}</h2>
      <div className="grid grid-cols-3 border-black border-2 text-8xl">
        {boardState.map(({ state }, index) => (
          <button className={buttonStyles} key={index} onClick={(e) => handleOnClick(e, index)}>
            {state}
          </button>
        ))}
      </div>
    </main>
  )
}
