// Project
import { TicTacToeValue } from '~/zustand/tic-tac-toe'
import { BsXLg, BsCircle, BsDashLg } from 'react-icons/bs'

export const iconByStatus: Record<TicTacToeValue, JSX.Element> = {
  cross: <BsXLg className='text-3xl' />,
  circle: <BsCircle className='text-3xl' />,
  empty: <BsDashLg className='text-3xl' />,
}
