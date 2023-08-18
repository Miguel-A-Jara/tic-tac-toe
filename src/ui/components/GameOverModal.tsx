// Third Party
import { useEffect, useRef } from 'react'

// Project
import { useTicTacToe } from '~/zustand/tic-tac-toe'

export default function GameOverModal() {
  const gameWonModalRef = useRef<HTMLDialogElement>(null)
  const { playsLeft, reset, userThatWon } = useTicTacToe((state) => ({
    reset: state.resetState,
    playsLeft: state.playsLeft,
    userThatWon: state.userThatWon,
  }))

  useEffect(() => {
    if (playsLeft > 0 || userThatWon) return
    gameWonModalRef.current?.showModal()
  }, [playsLeft])

  return (
    <dialog className='modal' ref={gameWonModalRef} onClose={() => reset()}>
      <form method='dialog' className='modal-box text-white '>
        <div className='flex items-center justify-center gap-2'>
          <h2>Game Over!</h2>
        </div>

        <div className='modal-action flex justify-center'>
          <button className='btn'>Try again</button>
        </div>
      </form>
    </dialog>
  )
}
