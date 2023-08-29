import ResultIndicator from '@/components/elements/ResultIndicator'
import * as S from './style'
import Input from '@/components/elements/Input'
import { useControl } from '@/hooks/useControl'

type DisplayResultsProps = {
	total: string
	income: string
	expense: string
}

const DisplayResults = ({ total, expense, income }: DisplayResultsProps) => {
	const {
		selectedControl: { name }
	} = useControl()
	return (
		<S.Container>
			<S.ContainerForm>
				<Input
					labelName="Nome do controle:"
					initialValue={name}
					placeholder="Ex: controle fevereiro"
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
