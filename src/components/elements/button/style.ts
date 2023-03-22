import styled, { css } from 'styled-components'

export const Button = styled.button`
	${({ theme }) => css`
		background-color: #757eff;
		color: ${theme.colors.mainBg};
	`}
`
