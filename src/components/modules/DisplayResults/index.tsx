import ResultIndicator from '@/components/elements/ResultIndicator'
import * as S from './style'
import Input from '@/components/elements/Input'

type DisplayResultsProps = {
	total: string
	income: string
	expense: string
}

const DisplayResults = ({ total, expense, income }: DisplayResultsProps) => {
	return (
		<S.Container>
			<S.ContainerForm>
				<Input
					labelName="Nome do controle"
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
