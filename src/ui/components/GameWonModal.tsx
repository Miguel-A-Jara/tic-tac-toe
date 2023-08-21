// Third Party
import { useEffect, useRef } from 'react'

// Project
import { CurrentPlayer } from '~/zustand/tic-tac-toe'
import { iconByStatus } from '~/utils/tic-tac-toe/icons'

interface GameWonModalProps {
  isOpen: boolean
  onClose: () => void
  userThatWon: CurrentPlayer | null
}

export default function GameWonModal({
  isOpen,
  onClose,
  userThatWon,
}: GameWonModalProps) {
  const gameWonModalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    gameWonModalRef.current?.close()
    if (isOpen) gameWonModalRef.current?.showModal()
  }, [isOpen])

  return (
    <>
      {userThatWon && (
        <dialog
          className='modal'
          ref={gameWonModalRef}
          onClose={() => onClose()}
        >
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
              <button
                className={`btn btn-outline border-white text-white outline-none hover:bg-white hover:border-white 
                ${
                  userThatWon === 'cross'
                    ? 'hover:text-primary'
                    : 'hover:text-secondary'
                }
              `}
              >
                Reset
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  )
}
