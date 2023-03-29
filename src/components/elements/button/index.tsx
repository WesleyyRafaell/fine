import { ButtonHTMLAttributes } from 'react'
import * as S from './style'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
	children: string
} & ButtonTypes

const Button = ({ children }: ButtonProps) => {
	return (
		<S.Button>
			<p>{children}</p>
		</S.Button>
	)
}

export default Button
