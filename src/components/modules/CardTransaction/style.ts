import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { TypeCardProps } from '.'
import { darken } from 'polished'

type ContainerProps = {
	enableCard: boolean
}

export const Container = styled(motion.div)<ContainerProps>`
	${({ theme, enableCard }) => css`
		background-color: ${enableCard
			? theme.colors.lightBlue
			: theme.colors.darkBlue};
		max-width: 47rem;
		height: 7.2rem;
		border-radius: 27px;
		display: flex;
		align-items: center;
		overflow: hidden;
		padding-right: 2.8rem;

		> p:nth-child(2) {
			flex: 1;
		}
	`}
`

type TypeTransactionProps = {
	enableCard: boolean
	type: TypeCardProps
}

export const TypeTransaction = styled.div<TypeTransactionProps>`
	${({ theme, type, enableCard }) => css`
		background-color: ${enableCard
			? theme.colors[type]
			: darken(0.1, theme.colors[type])};
		height: 100%;
		width: 2.1rem;
		margin-right: 1.5rem;
	`}
`

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	padding: 18px 0;
`

export const MainContent = styled.div`
	display: flex;
	justify-content: space-between;
`

export const HeaderContent = styled(motion.div)`
	display: flex;
	justify-content: center;
`

export const Wrapper = styled.div`
	width: 6.8rem;
	display: flex;
	justify-content: space-between;
`

type CircleButtonProps = {
	color: 'red' | 'green'
}

export const CircleButton = styled.button<CircleButtonProps>`
	${({ theme, color }) => css`
		width: 2rem;
		height: 2rem;
		background: ${theme.colors[color]};
		border: none;
		border-radius: 50%;
		cursor: pointer;
	`}
`

export const ImageButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	width: 24px;
	height: 27px;
`

export const FooterContent = styled(motion.div)`
	display: flex;
	justify-content: center;
`

export const Text = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
	`}
`
