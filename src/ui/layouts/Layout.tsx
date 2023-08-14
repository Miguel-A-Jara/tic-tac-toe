// Third Party
import { Helmet } from 'react-helmet-async'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useEffectOnce, useLocalStorage } from 'usehooks-ts'

// Project
import { Theme, useThemeStore } from '~/zustand/theme'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  const currentTheme = useThemeStore((store) => store.currentTheme)

  return (
    <>
      <Helmet>
        <html data-theme={currentTheme} />
      </Helmet>
      <div className='container mx-auto flex h-screen flex-col justify-between'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

function Navbar() {
  const theme = useThemeStore((store) => store)

  const [currentTheme, setCurrentTheme] = useLocalStorage<Theme>(
    'currentTheme',
    theme.currentTheme,
  )

  useEffectOnce(() => {
    theme.updateTheme(currentTheme)
  })

  function handleThemeButton(newTheme: Theme) {
    theme.updateTheme(newTheme)
    setCurrentTheme(newTheme)
  }

  return (
    <div className='navbar rounded-b-md bg-base-200'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl normal-case'>Tic-Tac-Toe!</a>
      </div>
      <div className='flex-none'>
        {theme.currentTheme === 'dark' ? (
          <button
            className='btn text-2xl'
            onClick={() => handleThemeButton('light')}
          >
            <BsSun />
          </button>
        ) : (
          <button
            className='btn text-2xl'
            onClick={() => handleThemeButton('dark')}
          >
            <BsMoon />
          </button>
        )}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className='footer footer-center rounded-t-md bg-base-200 p-4 text-base-content'>
      <div>
        <p>Copyright © 2023 - John Doe</p>
      </div>
    </footer>
  )
}
