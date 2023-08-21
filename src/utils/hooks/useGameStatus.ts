// React
import { useEffect, useState } from 'react'

// Project
import { CurrentPlayer, useTicTacToe } from '~/zustand/tic-tac-toe'

interface GameStatus {
  playsLeft: number
  isGameWon: boolean
  userThatWon: CurrentPlayer | null
  isGameOver: boolean
}

export default function useGameStatus() {
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    playsLeft: 0,
    isGameWon: false,
    userThatWon: null,
    isGameOver: false,
  })

  const { playsLeft, userThatWon } = useTicTacToe((state) => ({
    reset: state.resetState,
    playsLeft: state.playsLeft,
    userThatWon: state.userThatWon,
  }))

  useEffect(() => {
    const isGameWon = !!userThatWon
    const isGameOver = playsLeft < 1 && !!userThatWon

    setGameStatus({
      playsLeft,
      isGameWon,
      isGameOver,
      userThatWon,
    })
  }, [playsLeft])

  return gameStatus
}
