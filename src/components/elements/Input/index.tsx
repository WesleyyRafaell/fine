import { useState } from 'react'
import * as S from './style'
import { formatCurrency } from '@/utils/formatCurrency'

export type InputProps = {
	money?: boolean
	labelName?: string
	placeholder?: string
	initialValue?: string
	inputSize?: 'small' | 'regular'
}

const Input = ({
	money = false,
	labelName,
	placeholder = '',
	initialValue = '',
	inputSize = 'regular'
}: InputProps) => {
	const [inputValue, setInputValue] = useState(initialValue)

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
							value={formatCurrency(inputValue)}
							inputSize={inputSize}
						/>
					</>
				) : (
					<S.Input
						type="text"
						onChange={handleInputChange}
						id="input"
						placeholder={placeholder}
						value={inputValue}
						inputSize={inputSize}
					/>
				)}
			</S.ContainerInput>
		</S.Container>
	)
}

export default Input
