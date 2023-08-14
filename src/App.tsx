// Third Party
import { HelmetProvider } from 'react-helmet-async'

// Project
import Layout from '~/ui/layouts/Layout'

function App() {
  return (
    <>
      <HelmetProvider>
        <Layout />
      </HelmetProvider>
    </>
  )
}

export default App
