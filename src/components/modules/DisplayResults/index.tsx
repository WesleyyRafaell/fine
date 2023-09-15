import { useEffect, useState } from 'react'

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

	useEffect(() => {
		updateNameControl(selectedControl.id, selectedNameInput)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedNameInput])

	useEffect(() => {
		setSelectedNameInput(initialValue)
	}, [initialValue])

	return (
		<S.Container>
			<S.ContainerForm>
				<input
					type="text"
					name="name"
					id="name"
					value={selectedNameInput}
					onChange={(e) => setSelectedNameInput(e.target.value)}
				/>
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
