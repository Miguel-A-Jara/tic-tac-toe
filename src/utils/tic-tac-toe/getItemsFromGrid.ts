// Project
import { TicTacToeValue } from '~/zustand/tic-tac-toe'

export default function checkWin(
  grid: TicTacToeValue[],
): 'circle' | 'cross' | null {
  const gridSize = Math.sqrt(Object.keys(grid).length)

  function checkArrayWin(arr: TicTacToeValue[]): 'circle' | 'cross' | null {
    const firstValue = arr[0]

    if (firstValue === 'empty') {
      return null
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== firstValue) {
        return null
      }
    }

    return firstValue
  }

  const rows = getRowsFromGrid(grid, gridSize)
  const columns = getColumnsFromGrid(grid, gridSize)
  const diagonals = getDiagonalsFromGrid(grid, gridSize)

  const allArrays = [...rows, ...columns, ...diagonals]

  for (const arr of allArrays) {
    const winner = checkArrayWin(arr)
    if (winner !== null) {
      return winner
    }
  }

  return null
}

function getRowsFromGrid(
  grid: TicTacToeValue[],
  rowSize: number,
): Array<TicTacToeValue[]> {
  const gridValues = Object.values(grid)

  const rows: Array<TicTacToeValue[]> = []
  let currentRow: TicTacToeValue[] = []

  gridValues.forEach((item) => {
    currentRow.push(item)

    if (currentRow.length === rowSize) {
      rows.push(currentRow)
      currentRow = []
    }
  })

  // If there are remaining items in the last row that haven't been pushed
  if (currentRow.length > 0) {
    rows.push(currentRow)
  }

  return rows
}

function getColumnsFromGrid(
  grid: TicTacToeValue[],
  columnSize: number,
): Array<TicTacToeValue[]> {
  const gridValues = Object.values(grid)

  const columns: Array<TicTacToeValue[]> = new Array(columnSize)
    .fill(null)
    .map(() => [])

  gridValues.forEach((item, idx) => {
    const columnIndex = idx % columnSize
    columns[columnIndex].push(item)
  })

  return columns
}

function getDiagonalsFromGrid(
  grid: TicTacToeValue[],
  gridSize: number,
): Array<TicTacToeValue[]> {
  const gridValues = Object.values(grid)

  const mainDiagonal: TicTacToeValue[] = []
  const antiDiagonal: TicTacToeValue[] = []

  for (let i = 0; i < gridSize; i++) {
    const mainDiagonalIdx = i * gridSize + i
    mainDiagonal.push(gridValues[mainDiagonalIdx])

    const antiDiagonalIdx = (i + 1) * gridSize - 1 - i
    antiDiagonal.push(gridValues[antiDiagonalIdx])
  }

  return [mainDiagonal, antiDiagonal]
}
