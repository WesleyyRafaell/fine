import { useEffect, useState } from 'react'
import * as S from './style'
import { formatCurrency } from '@/utils/formatCurrency'

export type InputProps = {
	money?: boolean
	labelName?: string
	placeholder?: string
}

const Input = ({ money = false, labelName, placeholder = '' }: InputProps) => {
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		setInputValue('')
	}, [money])

	const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value

		if (money) {
			const moneyValueFormatted = formatCurrency(value)
			setInputValue(moneyValueFormatted)
			return
		}

		setInputValue(value)
	}

	return (
		<S.Container>
			{!!labelName && <S.Label htmlFor="input">{labelName}</S.Label>}
			<S.ContainerInput>
				{money ? (
					<>
						<S.MoneySymbol>R$</S.MoneySymbol>
						<S.Input
							type="text"
							onChange={handleInputChange}
							id="input"
							placeholder={placeholder}
							value={inputValue}
						/>
					</>
				) : (
					<S.Input
						type="text"
						onChange={handleInputChange}
						id="input"
						placeholder={placeholder}
						value={inputValue}
					/>
				)}
			</S.ContainerInput>
		</S.Container>
	)
}

export default Input
