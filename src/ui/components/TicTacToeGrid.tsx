// Project
import { iconByStatus } from '~/utils/tic-tac-toe/icons'
import { useTicTacToe, type TicTacToeValue } from '~/zustand/tic-tac-toe'

export default function TicTacToeGrid() {
  const { ticTacToeGrid, gridSize } = useTicTacToe((state) => state)
  const rowSize = Math.sqrt(gridSize)

  return (
    <div className='mx-auto w-full p-2 sm:max-w-sm lg:max-w-md'>
      <div
        style={{ gridTemplateColumns: `repeat(${rowSize}, 1fr)` }}
        className={`grid aspect-square place-items-stretch gap-4 rounded-lg bg-base-300 p-4`}
      >
        {ticTacToeGrid.map((ticTacToeItem, idx) => (
          <GridItem key={idx} item={ticTacToeItem} idx={idx} />
        ))}
      </div>
      <CurrentPlayer />
    </div>
  )
}

interface GridItemProps {
  idx: number
  item: TicTacToeValue
}

function GridItem({ item, idx }: GridItemProps) {
  const { updateGridAtIdx, currentPlayer } = useTicTacToe((state) => state)
  const playerValue = currentPlayer === 'circle' ? 'circle' : 'cross'

  return (
    <div
      className={`btn h-full w-full rounded-md
      ${item !== 'empty' && 'no-animation cursor-default'}
      ${item === 'cross' && 'btn-primary'}
      ${item === 'circle' && 'btn-secondary'}
    `}
      onClick={() => item === 'empty' && updateGridAtIdx(idx, playerValue)}
    >
      {iconByStatus[item]}
    </div>
  )
}

function CurrentPlayer() {
  const currentPlayer = useTicTacToe((state) => state.currentPlayer)

  return (
    <div
      className={` mt-4 flex w-full items-center justify-center gap-2 text-2xl font-bold transition-all duration-150
      ${currentPlayer === 'cross' && 'text-primary'} 
      ${currentPlayer === 'circle' && 'text-secondary'} 
      `}
    >
      Current Player: {iconByStatus[currentPlayer]}
    </div>
  )
}
