import styled, { css } from 'styled-components'

export const Container = styled.div`
	${({ theme }) => css`
		max-width: 47rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	`}
`
export const Box = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
