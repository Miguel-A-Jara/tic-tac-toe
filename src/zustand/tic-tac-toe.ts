// Third Party
import { z } from 'zod'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// Project
import checkWin from '~/utils/tic-tac-toe/getItemsFromGrid'
import getRandomPlayer from '~/utils/tic-tac-toe/randomPlayer'

export const ticTacToeItemValues = z.union([
  z.literal('empty'),
  z.literal('cross'),
  z.literal('circle'),
])

export type TicTacToeValue = z.infer<typeof ticTacToeItemValues>
export type CurrentPlayer = Exclude<TicTacToeValue, 'empty'>

const INIT_GRID_SIZE = 9
const ticTacToeGridDefaultValues: TicTacToeValue[] = [
  'empty',
  'empty',
  'empty',
  'empty',
  'empty',
  'empty',
  'empty',
  'empty',
  'empty',
]

interface TicTacToeState {
  gridSize: number
  playsLeft: number
  currentPlayer: CurrentPlayer
  userThatWon: null | CurrentPlayer
  currentWins: Record<CurrentPlayer, number>
  ticTacToeGrid: typeof ticTacToeGridDefaultValues
}

interface TicTacToeActions {
  resetState: () => void
  updateGridSize: (newGridSize: number) => void
  updateGridAtIdx: (idx: number, value: CurrentPlayer) => void
}

const initialState: TicTacToeState = {
  userThatWon: null,
  gridSize: INIT_GRID_SIZE,
  playsLeft: INIT_GRID_SIZE,
  currentPlayer: getRandomPlayer(),
  currentWins: { circle: 0, cross: 0 },
  ticTacToeGrid: ticTacToeGridDefaultValues,
}

export const useTicTacToe = create(
  immer<TicTacToeState & TicTacToeActions>((set) => ({
    ...initialState,
    updateGridAtIdx: (idx: number, value: TicTacToeValue) => {
      return set((state) => {
        state.ticTacToeGrid[idx] = value
        state.playsLeft -= 1
        state.currentPlayer =
          state.currentPlayer === 'circle' ? 'cross' : 'circle'

        const userTypeWon = checkWin(state.ticTacToeGrid)
        if (userTypeWon) {
          state.userThatWon = userTypeWon
          state.currentWins[userTypeWon] += 1
        }
      })
    },
    updateGridSize: (newGridSize: number) =>
      set((state) => {
        state.gridSize = newGridSize
        state.playsLeft = newGridSize

        state.ticTacToeGrid = createGridBySize(newGridSize)
      }),

    resetState: () => {
      set((state) => ({ ...initialState, currentWins: state.currentWins }))
    },
  })),
)

function createGridBySize(size: number): TicTacToeValue[] {
  const grid: TicTacToeValue[] = Array(size).fill('empty')
  return grid
}
