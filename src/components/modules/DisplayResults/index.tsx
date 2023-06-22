import ResultIndicator from '@/components/elements/ResultIndicator'
import * as S from './style'

type DisplayResultsProps = {
	total: string
	income: string
	expense: string
}

const DisplayResults = ({ total, expense, income }: DisplayResultsProps) => {
	return (
		<S.Container>
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
