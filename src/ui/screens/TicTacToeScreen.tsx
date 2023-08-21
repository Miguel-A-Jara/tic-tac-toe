// Project
import Layout from '~/ui/layouts/Layout'
import { useTicTacToe } from '~/zustand/tic-tac-toe'
import GameWonModal from '~/ui/components/GameWonModal'
import useGameStatus from '~/utils/hooks/useGameStatus'
import GameOverModal from '~/ui/components/GameOverModal'
import TicTacToeGrid from '~/ui/components/TicTacToeGrid'
import DifficultySlider from '~/ui/input/DifficultySlider'

export default function TicTacToeScreen() {
  const { isGameOver, isGameWon, userThatWon, playsLeft } = useGameStatus()
  const { resetState, ticTacToeGrid, gridSize } = useTicTacToe((state) => state)

  const hasGameStarted = playsLeft !== gridSize

  return (
    <>
      <Layout>
        <TicTacToeGrid grid={ticTacToeGrid} />
        <div className='flex justify-center items-center'>
          <DifficultySlider disabled={hasGameStarted} />
        </div>

        <GameWonModal
          isOpen={isGameWon}
          onClose={resetState}
          userThatWon={userThatWon}
        />
        <GameOverModal isOpen={isGameOver} onClose={resetState} />
      </Layout>
    </>
  )
}
