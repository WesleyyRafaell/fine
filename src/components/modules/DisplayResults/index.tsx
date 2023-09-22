import { useEffect, useRef, useState } from 'react'

import ResultIndicator from '@/components/elements/ResultIndicator'
import { useControl } from '@/hooks/useControl'

import * as S from './style'

type DisplayResultsProps = {
	total: string
	income: string
	expense: string
	initialValue: string
}

const DisplayResults = ({
	total,
	expense,
	income,
	initialValue,
}: DisplayResultsProps) => {
	const { selectedControl, updateNameControl } = useControl()
	const [selectedNameInput, setSelectedNameInput] = useState(initialValue)
	const inputName = useRef<HTMLInputElement>(null)

	useEffect(() => {
		updateNameControl(selectedControl.id, selectedNameInput)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedNameInput])

	useEffect(() => {
		setSelectedNameInput(initialValue)
	}, [initialValue])

	const cleanNameInput = () => {
		updateNameControl(selectedControl.id, '')
		inputName?.current?.focus()
	}

	return (
		<S.Container>
			<S.ContainerForm>
				<S.ContainerInput>
					<S.Label htmlFor="input">Nome do controle</S.Label>
					<S.WrapperInput>
						<S.TextInput
							inputSize="regular"
							type="text"
							name="name"
							id="name"
							value={selectedNameInput}
							onChange={(e) => setSelectedNameInput(e.target.value)}
							ref={inputName}
						/>
						<S.Icon onClick={cleanNameInput} />
					</S.WrapperInput>
				</S.ContainerInput>
			</S.ContainerForm>
			<ResultIndicator moneySignColor="orange" total={total} text="Total" />
			<S.Box>
				<ResultIndicator
					moneySignColor="green"
					total={income}
					text="Receitas"
				/>
				<ResultIndicator moneySignColor="red" total={expense} text="Despesas" />
			</S.Box>
		</S.Container>
	)
}

export default DisplayResults
