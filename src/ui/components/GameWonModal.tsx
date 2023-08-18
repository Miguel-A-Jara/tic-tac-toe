// Third Party
import { useEffect, useRef } from 'react'

// Project
import { useTicTacToe } from '~/zustand/tic-tac-toe'
import { iconByStatus } from '~/utils/tic-tac-toe/icons'

export default function GameWonModal() {
  const gameWonModalRef = useRef<HTMLDialogElement>(null)
  const [userThatWon, reset] = useTicTacToe((state) => [
    state.userThatWon,
    state.resetState,
  ])

  useEffect(() => {
    if (!userThatWon) return
    gameWonModalRef.current?.showModal()
  }, [userThatWon])

  return (
    <>
      {userThatWon && (
        <dialog className='modal' ref={gameWonModalRef} onClose={() => reset()}>
          <form
            method='dialog'
            className={`modal-box text-white ${
              userThatWon === 'cross' ? 'bg-primary' : 'bg-secondary'
            }`}
          >
            <div className='flex items-center justify-center gap-2'>
              <h2 className='text-lg font-bold'>{iconByStatus[userThatWon]}</h2>
              <h2>Player Won!</h2>
            </div>

            <div className='modal-action flex justify-center'>
              <button className='btn'>Reset</button>
            </div>
          </form>
        </dialog>
      )}
    </>
  )
}
