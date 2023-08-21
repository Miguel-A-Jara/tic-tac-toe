// React
import { ChangeEvent } from 'react'

// Third Party
import { useTicTacToe } from '~/zustand/tic-tac-toe'

interface DifficultySliderProps {
  disabled?: boolean
}

export default function DifficultySlider({
  disabled = false,
}: DifficultySliderProps) {
  const { gridSize, updateGridSize } = useTicTacToe((state) => state)

  const difficultyLevel = Math.sqrt(gridSize)

  function handleGridSizeChange(e: ChangeEvent<HTMLInputElement>) {
    const gridSize = parseInt(e.target.value)
    if (gridSize <= 0 || isNaN(gridSize)) return

    updateGridSize(gridSize * gridSize)
  }

  return (
    <div className='form-control w-full min-w-[80vw] md:min-w-[300px] max-w-sm shadow-md p-4 rounded-md'>
      <label className='label'>
        <span className='label-text'>Difficulty</span>
      </label>
      <input
        min={3}
        max={5}
        type='range'
        value={difficultyLevel}
        disabled={disabled}
        onChange={handleGridSizeChange}
        className={`range range-lg transition-all
                  ${difficultyLevel === 3 && 'range-accent'}
                  ${difficultyLevel === 5 && 'range-error'}
                  ${disabled && 'opacity-50'}`}
      />
      <div className='flex w-full justify-between p-2 text-xs'>
        <span>Easy</span>
        <span>Normal</span>
        <span>Hard</span>
      </div>
    </div>
  )
}
