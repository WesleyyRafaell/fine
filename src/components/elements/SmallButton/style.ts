import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
	${({ theme, color }) => css`
		background-color: ${theme.colors[color!]};
		color: ${theme.colors.white};
		display: flex;
		justify-content: center;
		align-items: center;
		width: 17rem;
		height: 4.2rem;
		border-radius: 13px;
		border: none;
		font-size: 1.6rem;
		font-weight: ${theme.font.bold};
		cursor: pointer;
	`}
`
