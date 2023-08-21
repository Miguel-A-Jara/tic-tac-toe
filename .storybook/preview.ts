import { withThemeByDataAttribute } from '@storybook/addon-styling'

//* NOTE: Following the docs, we import tailwind's CSS file
//* https://github.com/storybookjs/addon-styling/blob/main/docs/getting-started/tailwind.md#-import-your-css
import '../src/index.css'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
]
