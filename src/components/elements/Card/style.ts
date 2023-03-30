import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)``

export const Card = styled(motion.div)`
	${({ theme }) => css`
		width: 187px;
		cursor: pointer;
		border-radius: 12px;
		text-align: center;
		padding-top: 27px;
		background-color: ${theme.colors.secondary};
	`}
`

export const Text = styled.p`
	${({ theme }) => css`
		font-size: 18px;
		font-weight: bold;
		color: ${theme.colors.white};
	`}
`

export const ContainerIcon = styled(motion.div)`
	padding-top: 13.5px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const BoxIcon = styled.div`
	background: #00000000;
	display: inline-block;
	width: 7px;
	border-radius: 50%;
	width: 28.3px;
	height: 28.3px;
	display: flex;
	justify-content: center;
	align-items: center;

	transition: all 0.5s;

	:hover {
		background: #0000001a;
	}
`
