// Third Party
import { HelmetProvider } from 'react-helmet-async'

// Project
import Layout from '~/ui/layouts/Layout'
import GameWonModal from '~/ui/components/GameWonModal'
import TicTacToeGrid from '~/ui/components/TicTacToeGrid'
import GameOverModal from '~/ui/components/GameOverModal'
import DifficultySlider from './ui/input/DifficultySlider'

function App() {
  return (
    <>
      <HelmetProvider>
        <Layout>
          <TicTacToeGrid />
          <DifficultySlider />

          <GameWonModal />
          <GameOverModal />
        </Layout>
      </HelmetProvider>
    </>
  )
}

export default App
