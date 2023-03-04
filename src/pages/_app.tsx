import Head from 'next/head'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>React Avançado - Boilerplate</title>
				<meta name="theme-color" content="#06092B" />
				<meta
					name="description"
					content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
