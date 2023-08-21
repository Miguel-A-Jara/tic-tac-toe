// Third Party
import { HelmetProvider } from 'react-helmet-async'

// Project
import TicTacToeScreen from '~/ui/screens/TicTacToeScreen'

function App() {
  return (
    <>
      <HelmetProvider>
        <TicTacToeScreen />
      </HelmetProvider>
    </>
  )
}

export default App
