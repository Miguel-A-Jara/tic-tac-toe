// Third Party
import { HelmetProvider } from 'react-helmet-async'

// Project
import Layout from '~/ui/layouts/Layout'
import TicTacToeGrid from '~/ui/components/TicTacToeGrid'

function App() {
  return (
    <>
      <HelmetProvider>
        <Layout>
          <TicTacToeGrid />
        </Layout>
      </HelmetProvider>
    </>
  )
}

export default App
