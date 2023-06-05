import styled, { css } from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`
export const Label = styled.label`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: 1.6rem;
		margin-bottom: 1rem;
		font-weight: ${theme.font.bold};
	`}
`
export const ContainerInput = styled.div`
	display: flex;
`

export const Input = styled.input`
	width: 17.9rem;
	background: none;
	border: none;
	font-size: 1.6rem;
	outline: none;
	color: #ffffffbd;
`
export const MoneySymbol = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};
		font-size: 1.4rem;
		margin-right: 0.8rem;
	`}
`
