// Third Party
import { BsXLg, BsCircle, BsDashLg } from 'react-icons/bs'

type TicTacToeIdx = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type TicTacToeStatus = 'empty' | 'cross' | 'circle'

const ticTacToe: Record<TicTacToeIdx, TicTacToeStatus> = {
  0: 'circle',
  1: 'empty',
  2: 'cross',
  3: 'circle',
  4: 'empty',
  5: 'empty',
  6: 'cross',
  7: 'empty',
  8: 'empty',
}

export default function TicTacToeGrid() {
  const gridIdx = Object.keys(ticTacToe)

  return (
    <div className='mx-auto grid aspect-square w-full grid-cols-3 content-around justify-items-center gap-4 rounded-lg bg-base-300 p-2 sm:max-w-sm lg:max-w-md'>
      {gridIdx.map((item) => (
        <GridItem key={item} idx={parseInt(item) as TicTacToeIdx} />
      ))}
    </div>
  )
}

interface GridItemProps {
  idx: TicTacToeIdx
}

function GridItem({ idx }: GridItemProps) {
  const iconByStatus: Record<TicTacToeStatus, JSX.Element> = {
    cross: <BsXLg className='text-3xl' />,
    circle: <BsCircle className='text-3xl' />,
    empty: <BsDashLg className='text-3xl' />,
  }
  const currentValue = ticTacToe[idx]

  return (
    <div
      className={`btn h-20 w-20 rounded-md sm:h-24 sm:w-24 
      ${currentValue === 'cross' && 'btn-primary'}
      ${currentValue === 'circle' && 'btn-secondary'}
    `}
    >
      {iconByStatus[currentValue]}
    </div>
  )
}
