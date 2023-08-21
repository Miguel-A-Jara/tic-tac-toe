// Third Party
import { useEffect, useRef } from 'react'

interface GameOverModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GameOverModal({ isOpen, onClose }: GameOverModalProps) {
  const gameWonModalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    gameWonModalRef.current?.close()
    if (isOpen) gameWonModalRef.current?.showModal()
  }, [isOpen])

  return (
    <dialog className='modal' ref={gameWonModalRef} onClose={() => onClose()}>
      <form method='dialog' className='modal-box'>
        <div className='flex items-center justify-center gap-2'>
          <h2>Game Over!</h2>
        </div>

        <div className='modal-action flex justify-center'>
          <button className='btn outline-none'>Try again</button>
        </div>
      </form>
    </dialog>
  )
}
