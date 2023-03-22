import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/globals'
import theme from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export const decorators = [
  withThemeFromJSXProvider({
		themes: {
			light: theme,
		},
		Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export default preview
