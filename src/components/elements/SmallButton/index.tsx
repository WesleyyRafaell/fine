import { ButtonHTMLAttributes } from 'react'
import * as S from './style'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
	children: string
	color?: 'green' | 'red'
} & ButtonTypes

const SmallButton = ({ children, color = 'green' }: ButtonProps) => {
	return (
		<S.Button color={color}>
			<p>{children}</p>
		</S.Button>
	)
}

export default SmallButton
