// React
import { ChangeEvent } from 'react'

// Third Party
import { useTicTacToe } from '~/zustand/tic-tac-toe'

export default function DifficultySlider() {
  const { playsLeft, gridSize, updateGridSize } = useTicTacToe((state) => state)

  const difficultyLevel = Math.sqrt(gridSize)
  const hasGameStarted = playsLeft !== gridSize

  function handleGridSizeChange(e: ChangeEvent<HTMLInputElement>) {
    const gridSize = parseInt(e.target.value)
    if (gridSize <= 0 || isNaN(gridSize)) return

    updateGridSize(gridSize * gridSize)
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='form-control w-full max-w-xs'>
        <label className='label'>
          <span className='label-text'>Difficulty</span>
        </label>
        <input
          min={3}
          max={5}
          type='range'
          value={difficultyLevel}
          disabled={hasGameStarted}
          onChange={handleGridSizeChange}
          className={`range range-lg transition-all
                  ${difficultyLevel === 2 && 'range-accent'} 
                  ${difficultyLevel === 4 && 'range-error'}
                  ${hasGameStarted && 'opacity-50'}`}
        />
        <div className='flex w-full justify-between p-2 text-xs'>
          <span>Easy</span>
          <span>Normal</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  )
}
