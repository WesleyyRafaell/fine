import styled, { css } from 'styled-components'
import { CardTransactionProps } from '.'

export const Container = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.lightBlue};
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

export const TypeTransaction = styled.div<Pick<CardTransactionProps, 'type'>>`
	${({ theme, type }) => css`
		background-color: ${theme.colors[type]};
		height: 100%;
		width: 2.1rem;
		margin-right: 1.5rem;
	`}
`

export const Text = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
	`}
`
