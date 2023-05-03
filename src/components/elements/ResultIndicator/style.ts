import styled, { css } from 'styled-components'
import { ResultIndicatorProps } from '.'

export const Container = styled.div``

export const Text = styled.p`
	${({ theme }) => css`
		font-size: 16px;
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};
		margin-bottom: 12px;
	`}
`

export const MoneySign = styled.p<Pick<ResultIndicatorProps, 'moneySignColor'>>`
	${({ theme, moneySignColor }) => css`
		font-size: 15px;
		font-weight: ${theme.font.bold};
		color: ${theme.colors[moneySignColor!]};
		margin-bottom: 9px;
	`}
`

export const Number = styled.p`
	${({ theme }) => css`
		font-size: 48px;
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};
		padding-left: 21.2px;
	`}
`
