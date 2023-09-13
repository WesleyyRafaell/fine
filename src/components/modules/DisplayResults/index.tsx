import ResultIndicator from '@/components/elements/ResultIndicator'
import * as S from './style'
import Input from '@/components/elements/Input'
import { useControl } from '@/hooks/useControl'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

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
	const { controls, selectedControl, updateControl, setSelectedControl } =
		useControl()
	const [selectedNameInput, setSelectedNameInput] = useState(initialValue)

	useEffect(() => {
		const newSelectedControl = {
			...selectedControl,
			name: selectedNameInput,
		}

		const index = controls.findIndex((item) => item.id === selectedControl.id)
		controls[index].name = selectedNameInput

		updateControl(controls)
		setSelectedControl(newSelectedControl)
	}, [selectedNameInput])

	useEffect(() => {
		setSelectedNameInput(initialValue)
	}, [initialValue])

	return (
		<S.Container>
			<S.ContainerForm>
				{/* <Input
					name="name"
					value={nameInput}
					onChange={(e) => setValue('name', e.target.value)}
					labelName="Nome do controle:"
					placeholder="Ex: controle fevereiro"
					error={undefined}
				/> */}
				<input
					type="text"
					name="name"
					id="name"
					value={selectedNameInput}
					onChange={(e) => setSelectedNameInput(e.target.value)}
				/>
				<p>{selectedNameInput}</p>
				<p>{initialValue}</p>
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
