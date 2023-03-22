import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
		html {
			/* background: ${theme.colors.secondary}; */
		}
	`}

`
export default GlobalStyle
